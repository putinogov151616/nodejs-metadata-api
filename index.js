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
  const nam = parseInt(req.params.token_id).toString()
  const type = parseInt(req.params.token_id).toString()
  const face = parseInt(req.params.token_id).toString()
  const hair = parseInt(req.params.token_id).toString()
  const saucecup = parseInt(req.params.token_id).toString()
  const toothpick = parseInt(req.params.token_id).toString()
  const data = {
    'name': namName(nam),
    'attributes': {
      'type': typeName(type),
      'face': faceName(face),
      'hair': hairName(sauce),
      'sauce cup': saucecupName(saucecup),
      'toothpick': toothpickName(toothpick),
    },
    'image': `https://bafybeid6fk7gdxy4yovenpqc55mhc7ajsrxi4da5jckl2ykpe2bcagbkzq.ipfs.dweb.link/${tokenId}.jpg`
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

// returns the zodiac sign according to day and month ( https://coursesweb.net/javascript/zodiac-signs_cs )

function namName(nam) {
  const namNames = ["CryptoN #1", "CryptoN #2", "CryptoN #3", "CryptoN #4", "CryptoN #5", "CryptoN #6", "CryptoN #7", "CryptoN #8", "CryptoN #9", "CryptoN #10", "CryptoN #11", "CryptoN #12", "CryptoN #13", "CryptoN #14", "CryptoN #15", "CryptoN #16", "CryptoN #17", "CryptoN #18", "CryptoN #19", "CryptoN #20", "CryptoN #21", "CryptoN #22", "CryptoN #23"
  ]
  return namNames[nam - 1]
}

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

function hairName(hair) {
  const hairNames = ["novichok", "mustard", "chili", "novichok", "sweet n sour", "BBQ", "ketchup", "ketchup", "novichok", "ranch", "vegan", "chili", "ranch", "ranch", "ketchup", "vegan", "sweet n sour", "novichok", "vegan", "bBQ", "sweet n sour", "bBQ", "ketchup"
  ]
  return hairNames[hair - 1]
}

function saucecupName(saucecup) {
  const saucecupNames = ["", "gradient", "punkdonalds", "striped", "KFC", "burger king", "", "mcdonalds", "biohazard", "gradient", "kFC", "burger king", "striped", "kFC", "gradient", "gradient", "", "noname", "mcdonalds", "biohazard", "punkdonalds", "", "mcdonalds"
  ]
  return saucecupNames[saucecup - 1]
}

function toothpickName(toothpick) {
  const toothpickNames = ["", "", "wood", "", "", "", "wood", "", "wood", "", "", "wood", "", "", "wood", "", "", "", "", "", "", "", "",
  ]
  return toothpickNames[toothpick - 1]
}
