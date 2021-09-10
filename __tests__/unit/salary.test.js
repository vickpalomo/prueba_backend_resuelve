const { teamDataToReplaceLevels, getPercentageTeam, getTotalSalary } = require('../../lib/salary')
const mock = require('../../__mocks__/mock')

describe('salary.js file', () => {
  describe('#teamDataToReplace', () => {
    test('when receive a valid array of players should remove the level key and replace it with the key goles_minimos', () => {
      expect(teamDataToReplaceLevels(mock.players, mock.levels)).toEqual(mock.playersWithReplacedLevels)
    })
  })

  describe('#getPercentageTeam', () => {
    test('when receive a valid array of players should accumulate the goals required and scored by team and calculate the percentage obtained from the total', () => {
      expect(getPercentageTeam(mock.playersWithReplacedLevels)).toEqual(mock.totalGoalAndPercentageTeam)
    })
  })

  describe('#getTotalSalary', () => {
    test('when receive a valid array of players should calculate the full salary of each player', () => {
      expect(getTotalSalary(mock.playersWithReplacedLevels, mock.totalGoalAndPercentageTeam)).toEqual(mock.jsonResponse)
    })
  })
})
