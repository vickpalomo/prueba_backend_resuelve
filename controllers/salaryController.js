const { teamDataToReplaceLevels, getPercentageTeam, getTotalSalary } = require('../lib/salary')
let levels = require('../data/levels')

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
  return res.status(200).send({ code: 200, data: teamDataFullSalary, msg: 'Ok' })
}

module.exports = {
  calculateSalary
}
