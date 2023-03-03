const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = 3001


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  console.log('mongoose connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`The app is running on port:${PORT}`)
})