const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Sample App',
    },
  },
  apis: ['./src/router.js'],
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDoc(router) {
  router.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
}

module.exports = swaggerDoc
