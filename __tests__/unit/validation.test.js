const { isEmpty, validateSchemaPlayer, validateSchemaLevels } = require('../../middleware/validation')
const mock = require('../../__mocks__/mock')

describe('validation.js file', () => {
  describe('#isEmpty', () => {
    it('when receive an empty json should return true', () => {
      expect(isEmpty({})).toBeTruthy()
    })

    it('when not receive an empty json should return true', () => {
      expect(isEmpty({ players: mock.players })).toBeFalsy()
    })
  })

  describe('#validateSchemaPlayers', () => {
    it('when receive a json with a missing attribute should return true', () => {
      expect(validateSchemaPlayer({ players: mock.playersMissingAttribute })).toBeTruthy()
    })

    it('when receive a json with a valid schema should return false', () => {
      expect(validateSchemaPlayer({ jugadores: mock.players })).toBeFalsy()
    })
  })

  describe('#validateSchemaLevels', () => {
    it('when receive unknow levels should return true', () => {
      expect(validateSchemaLevels(mock.playersUnknowLevel, mock.levels)).toBeTruthy()
    })

    it('when receive valid levels should return false', () => {
      expect(validateSchemaLevels(mock.players, mock.levels)).toBeFalsy()
    })
  })
})
