const { isEmpty, validateSchemaLevels, validateSchemaPlayer } = require('./validation')
let levels = require('../data/levels')

/**
* @fileoverview Library for implement validations to the API
*
* @author Victor Palomo <ing.victorpalomo@gmail.com>
*/

/**
 * @function validationsMiddleware
 * @description Validate json receive with valid scheme
 * @param  {Object} req Request Object
 * @param  {Object} res Response Object
 * @param  {Function} next Pass control to the next function
 * @returns {Object | Function}
 */
const validationsMiddleware = (req, res, next) => {
  if (req.body.niveles) {
    levels = req.body.niveles.reduce((custom, nivel) => {
      custom[nivel.nivel] = nivel.goles
      return custom
    }, {})
  }
  if (isEmpty(req.body) || validateSchemaPlayer(req.body) || validateSchemaLevels(req.body.jugadores, levels)) return res.status(400).json({ code: 400, data: {}, msg: 'Se encontraron errores en los datos recibidos' })
  next()
}

module.exports = {
  validationsMiddleware
}
