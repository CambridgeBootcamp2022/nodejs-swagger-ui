const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const router = require('./router')
const swaggerDoc = require('./swagger')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)

  app.use('/', router)

  swaggerDoc(router)
})
