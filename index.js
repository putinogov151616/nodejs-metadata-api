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
  const monthNames = ["M. M. Vadar", "Darth Hearth", "The Ca", "Darth Garth", "Fapper Fonz", "Big Rover", "Mendoza Spinoza", "Crane Crane Croo", "Napper Niles", "B. B. Kray", "Cowardlydoc", "Tots-Ronnie", "Tawny Ronnie", "Cowardlyface Benita", "Da Real Benita", "Niles Niles Noo", "Ronnie Yani", "Benitastic B B", "Bennett Senate", "Crane Train", "Benita Meta", "BeeBee", "Ol Bennett", "Benita Benita B. ", "Sugar Ronnie", "Benitulous B", "Niles Wyles", "Inspectah Cowardly", "Tots-Cowardly", "Alex Kray", "Tots-Kray", "Alex Ronnie", "Benita Pita", "Benitormous B", "BeeEeEnEnEeTeeTee", "Ronnie Tawny", "Sugar Kray", "Crapper Crane", "Benita-B", "Benitadonna", "B. B. Ronnie", "BeeEeEnEyeTeeAy", "Big Alex", "Niles Wiles", "Abs-Cowardly", "CooloBennett", "Meta Benita", "Kray Day", "Crane Vein", "Bennett Tenet", "Cowardlyman", "Smartface Damian", "Damian Damien", "Miss Abyss", "Damian-R", "Tawny Ronnie", "Smartman", "Piggy Biggie", "Da Real Damian", "Kindness Kray", "Inspectah Smart", "Miss Miss Moo", "Smartdoc", "Ronnie Yani", "Papper Piggy", "Damianormous R", "Damianastic D R", "DeeAre", "Mesopotamian Damian", "Romero Camaro", "Tots-Ronnie", "Damian Mesopotamian", "Piggy Piggy Poo", "Tots-Smart", "Jiggy Piggy", "Alex Ronnie", "D. R. Ronnie", "Tots-Kray", "CooloRomero", "AreOhEmEeAreOh", "Miss Bliss", "Kray Day", "Ronnie Tawny", "D. R. Kray", "Damiana Damiana R. ", "Alex Kray", "Kindness Ronnie", "DeeAyEmEyeAyEn", "Abs-Smart", "Ol Romero", "Mapper Miss", "Damianadonna", "Narrow Romero", "Big Alex", "Damianulous R", "Edwardulous B", "Edwardormous B", "Abs-Special", "Bluebird Bird", "Specialface Edward", "Bird Word", "Charlie Harold", "Big Dig", "Tots-Shipman", "Bird Bluebird", "Bapper Bird", "EeDeeDoubleYouAyAreDee", "Edwardadonna", "Specialdoc", "Edwarda Edwarda B. ", "Ol Baker", "Charlie Shipman", "Da Real Edward", "Baker Acre", "Inspectah Special", "Big Big Boo", "Edward Eduard", "CooloBaker", "Harold Gerald", "Big Charlie", "EeBee", "Edwardastic E B", "E. B. Shipman", "E. B. Harold", "BeeAyKayEeAre", "Edward Headword", "Baker Maker", "Love Shipman", "Big Rig", "Tots-Special", "Shipman Midshipman", "Shipman Lipman", "Tots-Harold", "Bapper Big", "Edward-B", "Bird Bird Boo", "Harold Herald", "Love Harold", "Specialman", "Tots-Soze", "Carlastic C S", "Tots-Keyser", "Spencer Sensor", "Keyser Advisor", "Carla Darla", "Spitefulface Carla", "Spitefuldoc", "C. S. Keyser", "Spencer Censer", "Tots-Spiteful", "Carlormous S", "Carlulous S", "Tigger Soze", "Marge Marge Moo", "Kitten Keyser", "Mapper Marge", "Keyser Adviser", "Spitefulman", "Marge Charge", "Kitten Soze", "Carla Marla", "Abs-Spiteful", "Big Tigger", "SeaEss", "Spencer Censor", "SeaAyAreElAy", "Carla-S", "Inspectah Spiteful", "CooloSpencer", "EssPeeEeEnSeaEeAre", "Marge Discharge", "Sapper Simpson", "Carla Carla S. ", "Keyser Supervisor", "Carladonna", "Tigger Keyser", "Ol Spencer", "Da Real Carla", "Simpson Simpson Soo", "C. S. Soze"
  ]
  return monthNames[month - 1]
}

function memeName(meme) {
  const memeNames = ["Flippin' Kindness", "They Were Good Kindness", "Bling-a-ding Alex", "Two, Three, Four Kindness", "Miss Piggy, If You're Ready? ", "A Smart State of Mind", "Alex Better have My Kindness", "Alex-Face Robbers", "I'm still Damian From the Streets", "Alex Said Go", "So Smart (I think I'll Scream)", "Follow the Kindness", "The Story of Miss Piggy", "Ultra-Damian Goes Flip", "I Ain't No Ronnie Kray", "The Miss Piggy Effect", "Don't Talk to Me About Kindness, yaz? ", "Damian is as Damian does", "I is Smart (And Don't You Forget It)", "Ultra-Edward Goes Flip", "Bling-a-ding Charlie", "I Ain't No Harold Shipman", "A Special State of Mind", "Two, Three, Four Love", "Don't Talk to Me About Love, yaz? ", "Edward is as Edward does", "The Story of Big Bird", "Charlie-Face Robbers", "They Were Good Love", "Charlie Said Go", "Charlie Better have My Love", "Follow the Love", "I'm still Edward From the Streets", "Flippin' Love", "The Big Bird Effect", "I is Special (And Don't You Forget It)", "Big Bird, If You're Ready? ", "So Special (I think I'll Scream)", "Ultra-Carla Goes Flip", "Carla is as Carla does", "I Ain't No Keyser Soze", "Don't Talk to Me About Kitten, yaz? ", "Follow the Kitten", "I'm still Carla From the Streets", "They Were Good Kitten", "I is Spiteful (And Don't You Forget It)", "Tigger Said Go", "Marge Simpson, If You're Ready? ", "Two, Three, Four Kitten", "The Story of Marge Simpson", "A Spiteful State of Mind", "So Spiteful (I think I'll Scream)", "Tigger-Face Robbers", "Bling-a-ding Tigger", "Tigger Better have My Kitten", "Flippin' Kitten", "The Marge Simpson Effect"
  ]
  return memeNames[meme - 1]
}
