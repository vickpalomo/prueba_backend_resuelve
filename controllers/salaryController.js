const { teamDataToReplaceLevels, getPercentageTeam, getTotalSalary } = require('../lib/salary')
let levels = require('../data/levels')

/**
* @fileoverview Salary Controller
*
* @author Victor Palomo <ing.victorpalomo@gmail.com>
*/

/**
 * @function calculateSalary
 * @description Calculate the total salary of each player
 * @param  {Object} req Request Object
 * @param  {Object} res Response Object
 * @returns {Array} Array of players with the total salary calculated
 */
const calculateSalary = (req, res) => {
  if (req.body.niveles) {
    levels = req.body.niveles.reduce((custom, nivel) => {
      custom[nivel.nivel] = nivel.goles
      return custom
    }, {})
  }
  const teamDataToGetSalary = teamDataToReplaceLevels(req.body.jugadores, levels)
  const percentageTeam = getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = getTotalSalary(teamDataToGetSalary, percentageTeam)
  return res.status(200).json({ code: 200, data: teamDataFullSalary, msg: 'Ok' })
}

module.exports = {
  calculateSalary
}
