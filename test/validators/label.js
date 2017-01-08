/* global describe, it */
const expect = require('chai').expect
const label = require('../../src/validators/label')

describe('LABEL validator', () => {
  it('should accept single line LABEl directives', () => {
    const state = label('"com.example.vendor"="ACME Incorporated"')

    expect(state).to.have.an('object')
    expect(state).to.have.deep.property('valid', true)
  })

  it('should accept single line with multiple LABEL directives', () => {
    const state = label('multi.label1="value1" multi.label2="value2" other="value3"')

    expect(state).to.have.an('object')
    expect(state).to.have.deep.property('valid', true)
  })

  it('should accept multiple line LABEL directives', () => {
    const state = label('["multi.label1=\'value1\'", "multi.label2=\'value2\'", "other=\'value3\'"]')

    expect(state).to.have.an('object')
    expect(state).to.have.deep.property('valid', true)
  })
})
