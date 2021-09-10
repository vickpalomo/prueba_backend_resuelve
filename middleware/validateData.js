const { isEmpty, validateSchemaLevels, validateSchemaPlayer } = require('./validation')
const levels = require('../data/levels')

const validationsMiddleware = (req, res, next) => {
  if (isEmpty(req.body) || validateSchemaPlayer(req.body) || validateSchemaLevels(req.body.jugadores, levels)) return res.status(400).send({ code: 400, data: {}, msg: 'Se encontraron errores en los datos recibidos' })
  next()
}

module.exports = {
  validationsMiddleware
}
