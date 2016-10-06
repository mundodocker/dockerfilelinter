/* global describe it */
const expect = require('chai').expect
const errors = require('../../src/constants/errors')
const run = require('../../src/validators/run')
const warnings = require('../../src/constants/warnings')

describe('should validade RUN instruction', () => {
  it('should accept single line `shell` form command', () => {
    const state = run('mkdir foo')

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', true)
  })

  it('should accept `exec` form command', () => {
    const state = run('["mkdir", "foo"]')

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', true)
  })

  it('should accept multi-line `shell` form command', () => {
    const state = run('mkdir foo \ bar', false)

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', true)
  })

  it('should emmit error `RUN001` if `exec` form command has multi-lines', () => {
    const state = run('["mkdir", "foo", \ "bar"]', false)

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', false)
    expect(state).to.have.deep.property('rule', errors.RUN001)
  })
})
