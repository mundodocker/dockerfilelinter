/* global describe it */
const expect = require('chai').expect
const From = require('../../src/validators/from')

describe('should validate FROM instruction', () => {
  it('should accept `scratch` image name', () => {
    const rules = From.validate('scratch')

    expect(rules).to.be.instanceOf(Array)
    expect(rules).to.be.empty
  })

  it('should accept valid image with tag', () => {
    const rules = From.validate('ubuntu:14.04')

    expect(rules).to.be.instanceOf(Array)
    expect(rules).to.be.empty
  })

  it('should accept valid image with digest', () => {
    const rules = From.validate('ouruser/sinatra@cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf')

    expect(rules).to.be.instanceOf(Array)
    expect(rules).to.be.empty
  })

  it('should emmit warn WRN002 if `latest` is used', () => {
    const rules = From.validate('ubuntu:latest')

    expect(rules).to.be.instanceOf(Array)
    expect(rules).to.have.length(1)
    expect(rules).to.have.deep.property('[0]', 'WRN002')
  })
})
