const swaggerJsDoc = require('swagger-jsdoc')
require('dotenv').config()

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Resuelve API',
      version: '1.0.0',
      description:
        'Resuelve API',
      license: {
        name: 'MIT'
      },
      contact: {
        name: 'Swagger'
      }
    },
    servers: [
      {
        url: `http://localhost:${process.env.APP_PORT}`
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          name: 'Authorization',
          in: 'header',
          scheme: 'bearer'
        }
      }
    }
  },
  apis: ['./routes/*.js', './routes/modelo/*.js', './routes.js', './app.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = swaggerDocs