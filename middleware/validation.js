const Ajv = require('ajv')
const schema = require('../data/schema')

const isEmpty = (obj) => {
  let errors = false
  if (Object.keys(obj).length === 0) {
    errors = true
  }
  return errors
}

const validateSchemaPlayer = (players) => {
  const ajv = new Ajv()
  const valid = ajv.validate(schema, players)
  let errors = false
  if (!valid) {
    errors = true
  }
  return errors
}

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
