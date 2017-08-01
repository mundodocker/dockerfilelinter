const cmd = require('../../src/validators/cmd')
const rules = require('../../src/constants/rules')
const tape = require('tape')

tape('should accept CMD in `exec` form', t => {
  const state = cmd('["find", ".", "-type", "f", "-print0"]')

  t.equal(typeof state, 'object')
  t.equal(state.valid, true)

  t.end()
})

tape('should emmit CMD001 if CMD is used in `shell` form', t => {
  const state = cmd('find . -type f -print0')

  t.equal(typeof state, 'object')
  t.equal(state.valid, false)
  t.equal(state.rule, rules.CMD001)

  t.end()
})

tape('should emmit error CMD002 if `exec` form has single quotes', t => {
  const state = cmd('[\'find\', \'.\', \'-type\', \'f\', \'-print0\']')

  t.equal(typeof state, 'object')
  t.equal(state.valid, false)
  t.equal(state.rule, rules.CMD002)

  t.end()
})

tape('should emmit error CMD002 if `exec` has an invalid JSON', t => {
  const state = cmd('["find" "." "-type" "f" "-print0"]')

  t.equal(typeof state, 'object')
  t.equal(state.valid, false)
  t.equal(state.rule, rules.CMD002)

  t.end()
})
