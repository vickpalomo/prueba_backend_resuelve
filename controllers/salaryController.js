const { teamDataToReplaceLevels, getPercentageTeam, getTotalSalary } = require('../lib/salary')
const levels = require('../data/levels')

const calculateSalary = (req, res) => {
  const teamDataToGetSalary = teamDataToReplaceLevels(req.body.jugadores, levels)
  const percentageTeam = getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = getTotalSalary(teamDataToGetSalary, percentageTeam)
  return res.status(200).send({ code: 200, data: teamDataFullSalary, msg: 'Ok' })
}

module.exports = {
  calculateSalary
}
