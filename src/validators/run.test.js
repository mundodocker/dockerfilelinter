const rules = require('../../src/constants/rules')
const run = require('../../src/validators/run')
const tape = require('tape')

tape('should accept single line `shell` form command', t => {
  const state = run('mkdir foo')

  t.equal(typeof state, 'object')
  t.equal(state.valid, true)

  t.end()
})

tape('should accept `exec` form command', t => {
  const state = run('["mkdir", "foo"]')

  t.equal(typeof state, 'object')
  t.equal(state.valid, true)

  t.end()
})

tape('should accept multi-line `shell` form command', t => {
  const state = run(['mkdir -p', 'foo/bar'])

  t.equal(typeof state, 'object')
  t.equal(state.valid, true)

  t.end()
})

tape('should emmit error `RUN001` if `exec` form has single quotes', t => {
  const state = run('[\'mkdir\', \'foo\']')

  t.equal(typeof state, 'object')
  t.equal(state.valid, false)
  t.equal(state.rule, rules.RUN001)

  t.end()
})

tape('should emmit error `RUN002` if `exec` form has unescaped back lashes', t => {
  const state = run('["c:\\windows\\system32\\tasklist.exe"]')

  t.equal(typeof state, 'object')
  t.equal(state.valid, false)
  t.equal(state.rule, rules.RUN002)

  t.end()
})

tape('should emmit warning `RUN002` if `exec` form has an invalid JSON', t => {
  const state = run('["mkdir" "foo"]')

  t.equal(typeof state, 'object')
  t.equal(state.valid, false)
  t.equal(state.rule, rules.RUN003)

  t.end()
})
