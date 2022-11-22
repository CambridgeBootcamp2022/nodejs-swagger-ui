import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/api/hello')
})

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello World!',
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
