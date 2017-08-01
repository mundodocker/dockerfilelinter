const label = require('../../src/validators/label')
const tape = require('tape')

tape('should accept single line LABEl directives', t => {
  const state = label('"com.example.vendor"="ACME Incorporated"')

  t.equal(typeof state, 'object')
  t.equal(state.valid, true)

  t.end()
})

tape('should accept single line with multiple LABEL directives', t => {
  const state = label('multi.label1="value1" multi.label2="value2" other="value3"')

  t.equal(typeof state, 'object')
  t.equal(state.valid, true)

  t.end()
})

tape('should accept multiple line LABEL directives', t => {
  const state = label('["multi.label1=\'value1\'", "multi.label2=\'value2\'", "other=\'value3\'"]')

  t.equal(typeof state, 'object')
  t.equal(state.valid, true)

  t.end()
})
