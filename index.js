const express = require('express')
const path = require('path')
const moment = require('moment')
const { HOST } = require('./src/constants')
const db = require('./src/database')

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
  const person = db[tokenId]
  const bdayParts = person.birthday.split(' ')
  const day = parseInt(bdayParts[1])
  const month = parseInt(bdayParts[0])
  const data = {
    'name': person.name,
    'attributes': {
      'brahh': person.birthday,
      'dodik':  dodikd(dodik),
      'dodiks': monthName(month),
      'whaa': zodiac(day, month),
      // 'age': moment().diff(person.birthday, 'years')
    },
    'image': `${HOST}/images/${tokenId}.png`
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

// returns the zodiac sign according to day and month ( https://coursesweb.net/javascript/zodiac-signs_cs )
function zodiac(day, month) {
  var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
  var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
}

function monthName(month) {
  const monthNames = ["M. M. Vadar", "Darth Hearth", "The Ca", "Darth Garth", "Fapper Fonz", "Big Rover", "Mendoza Spinoza", "Crane Crane Croo", "Napper Niles", "B. B. Kray", "Cowardlydoc", "Tots-Ronnie", "Tawny Ronnie", "Cowardlyface Benita", "Da Real Benita", "Niles Niles Noo", "Ronnie Yani", "Benitastic B B", "Bennett Senate", "Crane Train", "Benita Meta", "BeeBee", "Ol Bennett", "Benita Benita B. ", "Sugar Ronnie", "Benitulous B", "Niles Wyles", "Inspectah Cowardly", "Tots-Cowardly", "Alex Kray", "Tots-Kray", "Alex Ronnie", "Benita Pita", "Benitormous B", "BeeEeEnEnEeTeeTee", "Ronnie Tawny", "Sugar Kray", "Crapper Crane", "Benita-B", "Benitadonna", "B. B. Ronnie", "BeeEeEnEyeTeeAy", "Big Alex", "Niles Wiles", "Abs-Cowardly", "CooloBennett", "Meta Benita", "Kray Day", "Crane Vein", "Bennett Tenet", "Cowardlyman", "Smartface Damian", "Damian Damien", "Miss Abyss", "Damian-R", "Tawny Ronnie", "Smartman", "Piggy Biggie", "Da Real Damian", "Kindness Kray", "Inspectah Smart", "Miss Miss Moo", "Smartdoc", "Ronnie Yani", "Papper Piggy", "Damianormous R", "Damianastic D R", "DeeAre", "Mesopotamian Damian", "Romero Camaro", "Tots-Ronnie", "Damian Mesopotamian", "Piggy Piggy Poo", "Tots-Smart", "Jiggy Piggy", "Alex Ronnie", "D. R. Ronnie", "Tots-Kray", "CooloRomero", "AreOhEmEeAreOh", "Miss Bliss", "Kray Day", "Ronnie Tawny", "D. R. Kray", "Damiana Damiana R. ", "Alex Kray", "Kindness Ronnie", "DeeAyEmEyeAyEn", "Abs-Smart", "Ol Romero", "Mapper Miss", "Damianadonna", "Narrow Romero", "Big Alex", "Damianulous R", "Edwardulous B", "Edwardormous B", "Abs-Special", "Bluebird Bird", "Specialface Edward", "Bird Word", "Charlie Harold", "Big Dig", "Tots-Shipman", "Bird Bluebird", "Bapper Bird", "EeDeeDoubleYouAyAreDee", "Edwardadonna", "Specialdoc", "Edwarda Edwarda B. ", "Ol Baker", "Charlie Shipman", "Da Real Edward", "Baker Acre", "Inspectah Special", "Big Big Boo", "Edward Eduard", "CooloBaker", "Harold Gerald", "Big Charlie", "EeBee", "Edwardastic E B", "E. B. Shipman", "E. B. Harold", "BeeAyKayEeAre", "Edward Headword", "Baker Maker", "Love Shipman", "Big Rig", "Tots-Special", "Shipman Midshipman", "Shipman Lipman", "Tots-Harold", "Bapper Big", "Edward-B", "Bird Bird Boo", "Harold Herald", "Love Harold", "Specialman", "Tots-Soze", "Carlastic C S", "Tots-Keyser", "Spencer Sensor", "Keyser Advisor", "Carla Darla", "Spitefulface Carla", "Spitefuldoc", "C. S. Keyser", "Spencer Censer", "Tots-Spiteful", "Carlormous S", "Carlulous S", "Tigger Soze", "Marge Marge Moo", "Kitten Keyser", "Mapper Marge", "Keyser Adviser", "Spitefulman", "Marge Charge", "Kitten Soze", "Carla Marla", "Abs-Spiteful", "Big Tigger", "SeaEss", "Spencer Censor", "SeaAyAreElAy", "Carla-S", "Inspectah Spiteful", "CooloSpencer", "EssPeeEeEnSeaEeAre", "Marge Discharge", "Sapper Simpson", "Carla Carla S. ", "Keyser Supervisor", "Carladonna", "Tigger Keyser", "Ol Spencer", "Da Real Carla", "Simpson Simpson Soo", "C. S. Soze",
  ]
  return monthNames[month - 1]
}

function dodikd(dodik) {
  const dodikds = ["M. M. Vadar", "Darth Hearth", "The Ca", "Darth Garth", "Fapper Fonz", "Big Rover", "Mendoza Spinoza", "Crane Crane Croo", "Napper Niles", "B. B. Kray", "Cowardlydoc", "Tots-Ronnie", "Tawny Ronnie", "Cowardlyface Benita", "Da Real Benita", "Niles Niles Noo", "Ronnie Yani", "Benitastic B B", "Bennett Senate", "Crane Train", "Benita Meta", "BeeBee", "Ol Bennett", "Benita Benita B. ", "Sugar Ronnie", "Benitulous B", "Niles Wyles", "Inspectah Cowardly", "Tots-Cowardly", "Alex Kray", "Tots-Kray", "Alex Ronnie", "Benita Pita", "Benitormous B", "BeeEeEnEnEeTeeTee", "Ronnie Tawny", "Sugar Kray", "Crapper Crane", "Benita-B", "Benitadonna", "B. B. Ronnie", "BeeEeEnEyeTeeAy", "Big Alex", "Niles Wiles", "Abs-Cowardly", "CooloBennett", "Meta Benita", "Kray Day", "Crane Vein", "Bennett Tenet", "Cowardlyman", "Smartface Damian", "Damian Damien", "Miss Abyss", "Damian-R", "Tawny Ronnie", "Smartman", "Piggy Biggie", "Da Real Damian", "Kindness Kray", "Inspectah Smart", "Miss Miss Moo", "Smartdoc", "Ronnie Yani", "Papper Piggy", "Damianormous R", "Damianastic D R", "DeeAre", "Mesopotamian Damian", "Romero Camaro", "Tots-Ronnie", "Damian Mesopotamian", "Piggy Piggy Poo", "Tots-Smart", "Jiggy Piggy", "Alex Ronnie", "D. R. Ronnie", "Tots-Kray", "CooloRomero", "AreOhEmEeAreOh", "Miss Bliss", "Kray Day", "Ronnie Tawny", "D. R. Kray", "Damiana Damiana R. ", "Alex Kray", "Kindness Ronnie", "DeeAyEmEyeAyEn", "Abs-Smart", "Ol Romero", "Mapper Miss", "Damianadonna", "Narrow Romero", "Big Alex", "Damianulous R", "Edwardulous B", "Edwardormous B", "Abs-Special", "Bluebird Bird", "Specialface Edward", "Bird Word", "Charlie Harold", "Big Dig", "Tots-Shipman", "Bird Bluebird", "Bapper Bird", "EeDeeDoubleYouAyAreDee", "Edwardadonna", "Specialdoc", "Edwarda Edwarda B. ", "Ol Baker", "Charlie Shipman", "Da Real Edward", "Baker Acre", "Inspectah Special", "Big Big Boo", "Edward Eduard", "CooloBaker", "Harold Gerald", "Big Charlie", "EeBee", "Edwardastic E B", "E. B. Shipman", "E. B. Harold", "BeeAyKayEeAre", "Edward Headword", "Baker Maker", "Love Shipman", "Big Rig", "Tots-Special", "Shipman Midshipman", "Shipman Lipman", "Tots-Harold", "Bapper Big", "Edward-B", "Bird Bird Boo", "Harold Herald", "Love Harold", "Specialman", "Tots-Soze", "Carlastic C S", "Tots-Keyser", "Spencer Sensor", "Keyser Advisor", "Carla Darla", "Spitefulface Carla", "Spitefuldoc", "C. S. Keyser", "Spencer Censer", "Tots-Spiteful", "Carlormous S", "Carlulous S", "Tigger Soze", "Marge Marge Moo", "Kitten Keyser", "Mapper Marge", "Keyser Adviser", "Spitefulman", "Marge Charge", "Kitten Soze", "Carla Marla", "Abs-Spiteful", "Big Tigger", "SeaEss", "Spencer Censor", "SeaAyAreElAy", "Carla-S", "Inspectah Spiteful", "CooloSpencer", "EssPeeEeEnSeaEeAre", "Marge Discharge", "Sapper Simpson", "Carla Carla S. ", "Keyser Supervisor", "Carladonna", "Tigger Keyser", "Ol Spencer", "Da Real Carla", "Simpson Simpson Soo", "C. S. Soze",
  ]
  return dodikds[dodik - 1]
}
