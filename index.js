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
      'hair': hairName(hair),
      'sauce cup': saucecupName(saucecup),
      'toothpick': toothpickName(toothpick),
    },
    'image': `ipfs://bafybeid6fk7gdxy4yovenpqc55mhc7ajsrxi4da5jckl2ykpe2bcagbkzq/${tokenId}.jpg`
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

// returns the zodiac sign according to day and month ( https://coursesweb.net/javascript/zodiac-signs_cs )

function namName(nam) {
  const namNames = ["TestFace 1", "TestFace 2", "TestFace 3", "TestFace 4", "TestFace 5", "TestFace 6", "TestFace 7", "TestFace 8", "TestFace 9", "TestFace 10", "TestFace 11", "TestFace 12", "TestFace 13", "TestFace 14", "TestFace 15", "TestFace 16", "TestFace 17", "TestFace 18", "TestFace 19", "TestFace 20", "TestFace 21", "TestFace 22", "TestFace 23", "TestFace 24"
  ]
  return namNames[nam - 1]
}

function typeName(type) {
  const typeNames = ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "green", "green", "green", "green", "green", "green", "green", "green", "green", "black", "black", "black", "black", "black", "black"
  ]
  return typeNames[type - 1]
}

function faceName(face) {
  const faceNames = ["happy", "happy", "happy", "angry", "angry", "angry", "sad", "sad", "sad", "happy", "happy", "happy", "angry", "angry", "angry", "sad", "sad", "sad", "happy", "happy", "happy", "angry", "angry", "angry"
  ]
  return faceNames[face - 1]
}

function hairName(hair) {
  const hairNames = ["", "trump", "lil yahty", "punk", "trump", "lil yahty", "punk", "trump", "lil yahty", "punk", "trump", "lil yahty", "punk", "trump", "lil yahty", "punk", "trump", "lil yahty", "punk", "trump", "lil yahty", "punk", "trump", "lil yahty"
  ]
  return hairNames[hair - 1]
}

function saucecupName(saucecup) {
  const saucecupNames = ["", ""
  ]
  return saucecupNames[saucecup - 1]
}

function toothpickName(toothpick) {
  const toothpickNames = ["", ""
  ]
  return toothpickNames[toothpick - 1]
}
