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
    'name': memeName(meme),
    'attributes': {
      'bccc': typeName(type),
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

function typeName(type) {
  const typeNames = ["chicken", "beef", "vegan", "chicken", "chicken", "chicken", "fish", "salmon", "synthetic", "fish", "chicken", "fish", "burned", "beef", "radioactive", "chicken", "pork", "fish", "radioactive", "pork", "chicken", "beef", "synthetic"
  ]
  return typeNames[type - 1]
}

function memeName(meme) {
  const memeNames = ["Flippin' Kindness", "They Were Good Kindness", "Bling-a-ding Alex", "Two, Three, Four Kindness", "Miss Piggy, If You're Ready? ", "A Smart State of Mind", "Alex Better have My Kindness", "Alex-Face Robbers", "I'm still Damian From the Streets", "Alex Said Go", "So Smart (I think I'll Scream)", "Follow the Kindness", "The Story of Miss Piggy", "Ultra-Damian Goes Flip", "I Ain't No Ronnie Kray", "The Miss Piggy Effect", "Don't Talk to Me About Kindness, yaz? ", "Damian is as Damian does", "I is Smart (And Don't You Forget It)", "Ultra-Edward Goes Flip", "Bling-a-ding Charlie", "I Ain't No Harold Shipman", "A Special State of Mind", "Two, Three, Four Love", "Don't Talk to Me About Love, yaz? ", "Edward is as Edward does", "The Story of Big Bird", "Charlie-Face Robbers", "They Were Good Love", "Charlie Said Go", "Charlie Better have My Love", "Follow the Love", "I'm still Edward From the Streets", "Flippin' Love", "The Big Bird Effect", "I is Special (And Don't You Forget It)", "Big Bird, If You're Ready? ", "So Special (I think I'll Scream)", "Ultra-Carla Goes Flip", "Carla is as Carla does", "I Ain't No Keyser Soze", "Don't Talk to Me About Kitten, yaz? ", "Follow the Kitten", "I'm still Carla From the Streets", "They Were Good Kitten", "I is Spiteful (And Don't You Forget It)", "Tigger Said Go", "Marge Simpson, If You're Ready? ", "Two, Three, Four Kitten", "The Story of Marge Simpson", "A Spiteful State of Mind", "So Spiteful (I think I'll Scream)", "Tigger-Face Robbers", "Bling-a-ding Tigger", "Tigger Better have My Kitten", "Flippin' Kitten", "The Marge Simpson Effect"
  ]
  return memeNames[meme - 1]
}
