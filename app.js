const express = require('express')

const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.send('express test')
})

app.listen(PORT, () => {
  console.log(`The app is running on port:${PORT}`)
})