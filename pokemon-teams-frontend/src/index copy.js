let BASE_URL = "http://localhost:3000"
let TRAINERS_URL = `${BASE_URL}/trainers`
let POKEMONS_URL = `${BASE_URL}/pokemons`


let pokeTeams = document.querySelector("main")
pokeTeams.id = "pokeMain"

// fetch(BASE_URL)
fetch(TRAINERS_URL)
// fetch(POKEMONS_URL)
.then(resp => resp.json())
.then(trainers => {(trainers)
  trainers["data"].forEach(trainer => {
// .then(({data}) => {

//   data.forEach(trainer => {
    let trainerCard = 
      `
      <div class="card" data-id="${trainer.id}">
        <h2 class="pr10">${trainer.attributes.name}
          <button data-trainer-id="${trainer.id}" class="ph20">Add Pokemon</button>
        </h2> 
      </div>
      `
    pokeMain.insertAdjacentHTML('beforeend', trainerCard);
    // pokeMain.insertAdjacentElement('beforeend', trainerTeam);
  })


/* <button id="add">Add Pokemon</button> */
// let trainerDiv = document.createElement('div', id='`${trainer.id}`')
// pokeMain.insertAdjacentElement('beforeend', trainerDiv)


// fetch(BASE_URL)
// .then(pokemons => {
  // pokemons["data"].forEach(pokemon => {


  // data.pokemons.forEach(pokemon => {
  //   let pokeUl = 
  //   `
  //     <ul>
  //     <li>
  //     ${pokemon.name}
  //     </li>
  //     </ul>
  //   `
  //   pokeMain.insertAdjacentHTML('beforeend', "<ul>");

  // })
})


// trainerCard = document.createElement('div')
// pokeTeams.insertAdjacentElement('beforeend', trainerCard)
// trainerCard.setAttribute("class", "card");

// trainerCard.setAttribute("data-id", '`${trainer.id}`') 

// trainerCard.insertAdjacentHTML("beforeend", '<ul id="trainerUl"></ul>')

// trainerUl.insertAdjacentHTML('beforeend', '<li id="trainerLi"> </li>')
// trainerLi.innerText = trainer.attributes.name
// trainerLi.appendChild(trainer.attributes.name)
// add.setAttribute("data-trainer-id", '`${trainer.attributes.id}`') 



// let pokeTeams = document.querySelector("main")
// pokeTeams.id = "pokeMain"

// trainerDiv.class = "card"

// let trainerDiv = document.createElement('div', id='card')
// pokeMain.insertAdjacentElement('beforeend', trainerDiv)

// let trainerDiv = document.createElement('div', id='card')
// pokeMain.insertAdjacentElement('beforeend', trainerDiv)