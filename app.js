// SECTION VARIABLES
let timeLimit = 10
let hunterName = ''

const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣', '🏠'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
}
]
// !SECTION

// SECTION FUNCTIONS

function drawPeople() {
  locations.forEach(location => {
    const peopleInLocation = people.filter(person => person.location == location)

    let peopleEmojis = peopleInLocation.map(person => person.picture)

    const locationElement = document.getElementById(location)
    //@ts-ignore
    locationElement.innerText = peopleEmojis
  })
}

function attack(location) {
  console.log(location);
  const foundPeople = people.filter(person => person.location == location)

  foundPeople.forEach(person => person.picture = '🦇')
  const foundHunter = foundPeople.filter(person => person.name == hunterName)
  console.log(foundHunter.length > 0)
  if (foundHunter.length > 0) {
    const livingPeopleSansHunter = people.filter(person => person.picture != '🦇' && person.name != hunterName)
    if (livingPeopleSansHunter.length > 0) {
      window.alert('You have been SLAIN!')
    }
    else {
      foundHunter[0].picture = '🦇'
    }
  }
  movePeople()
  drawPeople()
  checkForWin()
  reduceTime()
}

function checkForWin() {
  const livingPeople = people.filter(person => person.picture != '🦇')
  if (livingPeople.length == 0) {
    window.alert('You have succeeded in your vampire quest!')
  }
}

function movePeople() {
  people.forEach(person => {
    const randomLocationIndex = Math.floor(Math.random() * locations.length)
    const randomLocation = locations[randomLocationIndex]

    person.location = randomLocation
  })
}

function reduceTime() {
  timeLimit--
  if (timeLimit <= 0) {
    timeLimit = 0
  }
  checkForGameover()
  drawTime()
}

function drawTime() {
  const timerElement = document.getElementById('timer')
  //@ts-ignore
  timerElement.innerText = timeLimit
}

function checkForGameover() {
  if (timeLimit <= 0) {
    window.alert('The sun has risen, you have failed!')
  }
}

function setHunter() {
  const randomPeopleIndex = Math.floor(Math.random() * people.length)
  const randomPerson = people[randomPeopleIndex]

  hunterName = randomPerson.name
  console.log(hunterName);
}

// !SECTION

setHunter()
drawPeople()
drawTime()