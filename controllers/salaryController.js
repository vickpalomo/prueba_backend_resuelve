const calculateSalary = (req, res) => {
  return res.status(200).send({ code: 200, data: req.body, msg: 'Ok' })
}

module.exports = {
  calculateSalary
}
