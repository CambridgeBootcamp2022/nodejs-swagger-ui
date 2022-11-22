const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/docs')
})

/**
 * @openapi
 * /api/hello:
 *  get:
 *    description: Returns a hello message
 *    responses:
 *      200:
 *        description: It works
 */
router.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello World!',
  })
})

module.exports = router
