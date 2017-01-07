/* global describe, it */
const cmd = require('../../src/validators/cmd')
const expect = require('chai').expect
const rules = require('../../src/constants/rules')

describe('CMD validator', () => {
  it('should accept CMD in `exec` form', () => {
    const state = cmd('["find", ".", "-type", "f", "-print0"]')

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', true)
  })

  it('should emmit CMD001 if CMD is used in `shell` form', () => {
    const state = cmd('find . -type f -print0')

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', false)
    expect(state).to.have.property('rule')
    expect(state.rule).to.deep.equal(rules.CMD001)
  })

  it('should emmit error CMD002 if `exec` form has single quotes', () => {
    const state = cmd('[\'find\', \'.\', \'-type\', \'f\', \'-print0\']')

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', false)
    expect(state).to.have.property('rule')
    expect(state.rule).to.deep.equal(rules.CMD002)
  })

  it('shoud emmit error CMD002 if `exec` has an invalid JSON', () => {
    const state = cmd('["find" "." "-type" "f" "-print0"]')

    expect(state).to.have.an('object')
    expect(state).to.have.deep.property('valid', false)
    expect(state).to.have.property('rule')
    expect(state.rule).to.deep.equal(rules.CMD002)
  })
})
