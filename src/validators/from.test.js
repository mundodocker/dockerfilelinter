const from = require('../../src/validators/from')
const rules = require('../../src/constants/rules')
const tape = require('tape')

tape('should accept `scratch` as image name', t => {
  const state = from('scratch')

  t.equal(typeof state, 'object')
  t.deepEqual(state.valid, true)

  t.end()
})

tape('should emmit error FRM001 if `tag` is empty', t => {
  const state = from('ubuntu:')

  t.equal(typeof state, 'object')
  t.deepEqual(state.valid, false)
  t.deepEqual(state.rule, rules.FRM001)

  t.end()
})

tape('should emmit error FRM001 if `digest` is empty', t => {
  const state = from('ubuntu@')

  t.equal(typeof state, 'object')
  t.deepEqual(state.valid, false)
  t.deepEqual(state.rule, rules.FRM001)

  t.end()
})

tape('should accept valid image with tag', t => {
  const state = from('ubuntu:14.04')

  t.equal(typeof state, 'object')
  t.deepEqual(state.valid, true)

  t.end()
})

tape('should accept valid image with digest', t => {
  const state = from('ouruser/sinatra@cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf')

  t.equal(typeof state, 'object')
  t.deepEqual(state.valid, true)

  t.end()
})

tape('should emmit warn FROM002 if image `tag` or `digest` is omitted', t => {
  const state = from('ubuntu')

  t.equal(typeof state, 'object')
  t.deepEqual(state.valid, false)
  t.deepEqual(state.rule, rules.FRM002)

  t.end()
})

tape('should emmit warn FROM002 if `latest` is used', t => {
  const state = from('ubuntu:latest')

  t.equal(typeof state, 'object')
  t.deepEqual(state.valid, false)
  t.deepEqual(state.rule, rules.FRM002)

  t.end()
})
