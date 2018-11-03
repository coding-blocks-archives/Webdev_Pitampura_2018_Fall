const chai = require('chai')
const expect = chai.expect

const lib = require('../src/lib.js')

describe('tests for lib.js/firstname',
  () => {

    it('should return first name', () => {
      const fn = lib.getFirstName('Ashok Kumar')

      expect(fn).to.be.a('string')
      expect(fn).to.equal('Ashok')
    })

    it('should return null for empty string', () => {
      const fn = lib.getFirstName('')

      expect(fn).to.equal(null)
    })

  }
)

describe('tests for lib.js/lastname',
  () => {

    it('should return last name', () => {
      const fn = lib.getLastName('Ashok Kumar')

      expect(fn).to.be.a('string')
      expect(fn).to.equal('Kumar')
    })

    it('should return null for empty string', () => {
      const fn = lib.getLastName('')

      expect(fn).to.equal(null)
    })

    it('should return null for only firstname', () => {
      const fn = lib.getLastName('Ashok')

      expect(fn).to.equal(null)
    })

  }
)
