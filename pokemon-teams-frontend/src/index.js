let BASE_URL = "http://localhost:3000"
let TRAINERS_URL = `${BASE_URL}/trainers`
let POKEMONS_URL = `${BASE_URL}/pokemons`


let pokeTeams = document.querySelector("main")
pokeTeams.id = "pokeMain"

// fetch(BASE_URL)
fetch(TRAINERS_URL)
  .then(resp => resp.json())
  .then(trainers => {
    trainers["data"].forEach(trainer => {
      let trainerCard = `
        <div class="card" data-id="${trainer.id}">
          <p>${trainer.attributes.name}
            <button data-trainer-id="${trainer.id}">Add Poke</button>
            <ul id="trainerUl-${trainer.id}"></ul>
          </p> 
          </div>
          `
      pokeMain.insertAdjacentHTML('beforeend', trainerCard)
          
          // document.querySelector(`#trainerUl-id='${trainer.id}'`);  
    })    
    fillTeams();
  })

function fillTeams() {
  (fetch(POKEMONS_URL))
    .then(resp => resp.json())
    .then(pokemons => {
      pokemons.forEach(pokemon => {
        let pokeLi =  `        
        <li id="${pokemon.id}" trainerId="${pokemon.trainer_id}">
        ${pokemon.nickname} (${pokemon.species})  
        <button class="release" data-pokemon-id="${pokemon.id}">Rel Poke</button>
        </li>
        `;
        let trainerUl = document.getElementById(`trainerUl-${pokemon.trainer_id}`)
        trainerUl.insertAdjacentHTML('beforeend', pokeLi);
      })
    })
};

function delPoke(POKEMONS_URL, pokemonId) {
  let pokeTrnIdData = {
    trainer_id: ""
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(pokeTrnIdData)
  };

  return fetch("http://localhost:3000/pokemons", `${configObj}`)

    .then(resp => resp.json())
    .then(pokemons => {
      pokemons[pokemonId].trainer_id
      pokeliDel.setAttribute("pokemons[pokemonId].trainer_id", "");
      let pokeLiDel = document.getElementById(`trainerUl-${pokemon.trainer_id}`)
      console.log(pokeLiDel)
      console.log(pokemonId)
      event.target.parentNode.remove();
    })
};

document.addEventListener('click', (event) => {
  if (event.target.matches(".release")) {
    const pokemonId = event.target.dataset.pokemonId;
    delPoke(POKEMONS_URL, `${pokemonId}`);

  }
  
  if (event.target.matches("add")) {
    const trainerId = event.target.dataset.trainerId;
    addPoke(TRAINERS_URL, trainerId);
  }
})
      
      
      




