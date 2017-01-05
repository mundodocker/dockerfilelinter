/* global describe it */
const rules = require('../../src/constants/rules')
const expect = require('chai').expect
const run = require('../../src/validators/run')
const types = require('../../src/constants/types')

describe('RUN validator', () => {
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
    const state = run(['mkdir -p', 'foo/bar'])

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', true)
  })

  it('should emmit error `RUN001` if `exec` form has single quotes', () => {
    const state = run('[\'mkdir\', \'foo\']')

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', false)
    expect(state).to.have.property('rule')
    expect(state.rule).to.deep.equal(rules.RUN001)
  })

  it('should emmit error `RUN002` if `exec` form has unescaped back lashes', () => {
    const state = run('["c:\\windows\\system32\\tasklist.exe"]')

    expect(state).to.be.an('object')
    expect(state).to.have.deep.property('valid', false)
    expect(state).to.have.property('rule')
    expect(state.rule).to.deep.equal(rules.RUN002)
  })

  it('should emmit warning `RUN002` if `exec` form has an invalid JSON', () => {
    const state = run('["mkdir" "foo"]')

    expect(state).to.be.an('object')
    expect(state).to.have.property('rule')
    expect(state).to.have.deep.property('valid', false)
    expect(state.rule).to.deep.equal(rules.RUN003)
  })
})
