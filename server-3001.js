const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
  origin: true
}))

app.post('/moved-from', function (req, res) {
  res
    .status(303)
    .set('Location', '/moved-to')
    .end()
})

app.get('/moved-to', function (req, res) {
  res.json({
    data: 'get-moved-to'
  })
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
