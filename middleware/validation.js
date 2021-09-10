const Ajv = require('ajv')
const schema = require('../data/schemaResuelve')

/**
* @fileoverview Library with functions that validate the data sent in the request to the API
*
* @author Victor Palomo <ing.victorpalomo@gmail.com>
*/

/**
 * @function isEmpty
 * @description Validate if the object sent in the request is empty
 * @param  {JSON} obj Object sent in the request to the api
 * @returns {Boolean}
 */
const isEmpty = (obj) => {
  let errors = false
  if (Object.keys(obj).length === 0) {
    errors = true
  }
  return errors
}

/**
 * @function validateSchemaPlayer
 * @description Analyze the json structure and verify that all the request data is correct
 * @param  {Array} players Array with player data
 * @returns {Boolean}
 */
const validateSchemaPlayer = (players) => {
  const ajv = new Ajv()
  const valid = ajv.validate(schema, players)
  let errors = false
  if (!valid) {
    errors = true
  }
  return errors
}

/**
 * @function validateSchemaLevels
 * @description Check that the level assigned to the player is in the default level object or in the object sent within the request
 * @param  {Array} players Array with player data
 * @param  {Object} levels Object with levels by team
 * @returns {Boolean}
 */
const validateSchemaLevels = (players, levels) => {
  let errors = false
  const unknowLevels = players.filter(player => {
    return !levels[player.nivel]
  })
  if (unknowLevels.length !== 0) {
    errors = true
  }
  return errors
}

module.exports = {
  isEmpty,
  validateSchemaPlayer,
  validateSchemaLevels
}
