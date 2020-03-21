var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.use(express.static('public'))

// Create a list of characters we will add to the website
characters = {}

// function that adds a character to the list of characters
function addCharacter (character) {
  var id = Object.keys(characters).length
  characters[id] = character
}

// Create some characters to look at
var spiderman = {
  title: "Spider-Man",
  image: "/images/spider-man.jpg",
  link: "https://en.wikipedia.org/wiki/Spider-Man_(2002_film)",
  movieReleaseDate: "2002",
  description: "Spider-Man is the best Marvel character ever, it's not even close. Especially the Tobey Maguire version of Spider-Man. He's a goofy guy, but extremely humble and has a genuine interest in helping people. He does everything by himself, with no help from fancy gadgets or friends. He gets beaten down, but always gets back up. Spider-Man is clearly the best!"
}

var ironMan = {
  title: "Iron Man",
  image: "/images/iron-man.jpg",
  link: "https://en.wikipedia.org/wiki/Iron_Man_(2008_film)",
  movieReleaseDate: "2008",
  description: "Iron Man is up there as one of my favorites because he always seems to know what to do, has incredible brainpower, and underneath the raging narcisism, he wants to help people out. Plus he was the first major super hero in the MCU (not counting Captain America), and his movies kicked off the MCU as we know it."
}

var antMan = {
  title: "Ant-Man",
  image: "/images/ant-man.jpg",
  link: "https://en.wikipedia.org/wiki/Ant-Man_(film)",
  movieReleaseDate: "2015",
  description: "Ant-Man is just an awesome and friendly guy. He's wicked smart, super goofy, and overall feels relatable. Plus he was pretty instrumental in helping with the time travel part of things in EndGame. He's consistently funny, and can take down some hardcore villans."
}

// Let's add them to the list of characters
addCharacter(spiderman)
addCharacter(ironMan)
addCharacter(antMan)

// Create a list of links to pass to the routing values
links = {}

function addLink(hrf, txt) {
  var id = Object.keys(links).length
  links[id] = {
    href: hrf,
    text: txt
  }
}

// Add some links to the list of links
addLink('/', 'Home')
addLink('/spider-man', 'Spider-Man')
addLink('/ironman', 'Iron-Man')
addLink('/ant-man', 'Ant-Man')

// Route the server requests
app.get('/', function (request, response) {
  response.render('pages/index', {
    characters: characters,
    links: links
  })
})

app.get('/spider-man', function (request, response) {
  response.render('pages/spiderman', {
    character: spiderman,
    links: links
  })
})

app.get('/ironman', function (request, response) {
  response.render('pages/ironman', {
    character: ironMan,
    links: links
  })
})

app.get('/ant-man', function (request, response) {
  response.render('pages/antman', {
    character: antMan,
    links: links
  })
})

app.listen(port)
