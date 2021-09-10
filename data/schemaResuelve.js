const schema = {
  type: 'object',
  required: ['jugadores'],
  properties: {
    jugadores: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['nombre', 'nivel', 'goles', 'sueldo', 'bono', 'equipo'],
        properties: {
          nombre: { type: 'string', minLength: 1 },
          nivel: { type: 'string', minLength: 1 },
          goles: { type: 'number', minimum: 0 },
          sueldo: { type: 'number', minimum: 0 },
          bono: { type: 'number', minimum: 0 },
          equipo: { type: 'string', minLength: 1 }
        }
      }
    },
    niveles: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['nivel', 'goles'],
        properties: {
          nivel: { type: 'string', minLength: 1 },
          goles: { type: 'number', minimum: 0 }
        }
      }
    }
  }
}

module.exports = schema
