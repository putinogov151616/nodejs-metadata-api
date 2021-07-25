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
  const type = parseInt(req.params.token_id).toString()
  const meme = parseInt(req.params.token_id).toString()
  const data = {
    'name': typeName(type),
    'attributes': {
      'type': typeName(type),
      'face': faceName(face),
      'sauce': sauceName(sauce),
      'sauce cup': saucecupName(saucecup),
      'toothpick': toothpickName(toothpick),
    },
    'image': `${HOST}/images/${tokenId}.png`
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

// returns the zodiac sign according to day and month ( https://coursesweb.net/javascript/zodiac-signs_cs )

function typeName(type) {
  const typeNames = ["chicken", "beef", "vegan", "chicken", "chicken", "chicken", "fish", "salmon", "synthetic", "fish", "chicken", "fish", "burned", "beef", "radioactive", "chicken", "pork", "fish", "radioactive", "pork", "chicken", "beef", "synthetic"
  ]
  return typeNames[type - 1]
}

function faceName(face) {
  const faceNames = ["eth eyed", "crooky", "angry", "crooky", "suspicious", "eth eyed", "shilly", "suspicious", "angry", "concern", "suspicious", "shilly", "eth eyed", "salty", "shilly", "fomo", "suspicious", "salty", "btc eyed", "mean", "angry", "hodl", "fomo"
  ]
  return faceNames[face - 1]
}

function sauceName(sauce) {
  const sauceNames = ["novichok", "mustard", "chili", "novichok", "sweet n sour", "BBQ", "ketchup", "ketchup", "novichok", "ranch", "vegan", "chili", "ranch", "ranch", "ketchup", "vegan", "sweet n sour", "novichok", "vegan", "bBQ", "sweet n sour", "bBQ", "ketchup"
  ]
  return sauceNames[sauce - 1]
}
