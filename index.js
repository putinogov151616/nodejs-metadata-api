const express = require('express')
const path = require('path')
const moment = require('moment')
const { HOST } = require('./src/constants')

const PORT = process.env.PORT || 5000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.send('Get ready for OpenSea!');
})

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const month = parseInt(req.params.token_id).toString()
  const meme = parseInt(req.params.token_id).toString()
  const data = {
    'name': memeName(meme),
    'attributes': {
      'bccc': monthName(month),
      'meme': memeName(meme),
    },
    'image': `${HOST}/images/${tokenId}.png`
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

// returns the zodiac sign according to day and month ( https://coursesweb.net/javascript/zodiac-signs_cs )

function monthName(month) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
  return monthNames[month - 1]
}

function memeName(meme) {
  const memeNames = ["memeJanuary", "xFebruary", "yMarch", "cApril", "dMay", "Jcune", "Jfuly", "kAugust", "fSeptember", "October", "November", "December"
  ]
  return memeNames[meme - 1]
}
