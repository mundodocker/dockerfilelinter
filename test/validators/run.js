/* global describe it */
const constants = require('../../src/constants/constants')
const expect = require('chai').expect
const run = require('../../src/validators/run')

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
    const state = run(['mkdir foo', 'bar'])

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', true)
  })
})
