import { pokemonList } from "./pokemon-list";
import { pokedex, typesContainer } from "./domElements";
import fetchPokemonData from "./api";
const pokemonTypesList = [];

let filteredPokemons = [...pokemonList];
const selectedTypes = [];

function checkIfTypeIsSelected(pokemon) {
  const pokemonTypes = pokemon.type.split(", ");

  return pokemonTypes.some((t) => selectedTypes.includes(t));
}

function filterByTypes() {
  if (selectedTypes.length < 1) {
    filteredPokemons = pokemonList;
  } else {
    filteredPokemons = pokemonList.filter(checkIfTypeIsSelected);
  }
}

function toggleTypes(type) {
  if (selectedTypes.includes(type)) {
    const indexOfType = selectedTypes.indexOf(type);
    selectedTypes.splice(indexOfType, 1);
  } else {
    selectedTypes.push(type);
  }
}

function hightLightButton() {
  const buttonList = document.querySelectorAll(".type");
  for (let i = 0; i < buttonList.length; i++) {
    if (selectedTypes.includes(buttonList[i].dataset.type)) {
      buttonList[i].classList.add("active");
    } else {
      buttonList[i].classList.remove("active");
    }
  }
}

export function addListenerToAllButtons() {
  const buttonList = document.querySelectorAll(".type");
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
      toggleTypes(buttonList[i].dataset.type);
      filterByTypes();
      displayPokemons();
      hightLightButton();
      addListerToPokemons();
    });
  }
}

export function addListerToPokemons() {
  const pokemons = document.querySelectorAll(".card");
  for (let i = 0; i < pokemons.length; i++) {
    pokemons[i].addEventListener("click", function () {
      fetchPokemonData(pokemons[i].dataset.number);
    });
  }
  pokemons.foe;
}
function getAllPokemonTypes() {
  // inziamo facendo un loop per ogni pokemon in pokemonList
  for (const pokemon of pokemonList) {
    // per ogni pokemon, creiamo un array dei suoi tipi (pokemonTypes)
    // (i pokemon possono avere al max 2 tipi,
    // quindi al max sarà un array con lunghezza 2)
    const pokemonTypes = pokemon.type.split(", ");
    // per ognuno dei suoi tipi, controlliamo se è già nell'array pokemonTypesList
    // se non c'è (!pokemonTypesList.includes(type)) allora facciamo push
    for (const type of pokemonTypes) {
      // console.log(`il type: ${type} è già nella lista?`,pokemonTypesList.includes(type))
      if (!pokemonTypesList.includes(type)) {
        pokemonTypesList.push(type);
      }
    }
  }
}

export function displayTypes() {
  getAllPokemonTypes();
  const typesButtons = [];
  for (const type of pokemonTypesList) {
    typesButtons.push(createTypeButton(type));
  }
  typesContainer.innerHTML = typesButtons.join("");
}

// una funzione che prende in input la stringa con i tipi e ci ritorna
// una stringa con lo style del border e del box shadow
function cardBorder(types) {
  // divido la stringa dei tipi creando un array con 1 o 2 elementi (in base al pokemon)
  const typesArray = types.split(", ");
  let styling = `border-color: var(--${typesArray[0]}); `;
  if (typesArray[1]) {
    styling =
      styling + `box-shadow: inset 0px 0px 0px 4px var(--${typesArray[1]});`;
  }
  return styling;
}

function typeShadow(type) {
  // divido la stringa dei tipi creando un array con 1 o 2 elementi (in base al pokemon)
  let styling = `background: var(--${type}); `;
  return styling;
}

// creiamo una funzione che ci torni una stringa con dell'HTML
function createPokemonCard(data) {
  return `<div class="card"
          style="${cardBorder(data.type)}"
          data-number="${data.id}"
          >
          <img src="${data.image}"/>
          <span>${data.name}</span>
          <span>${data.type}</span>
      </div>`;
}

function createTypeButton(type) {
  return `<button class="type" style="${typeShadow(type)}" data-type="${type}">
      ${type}
  </button>`;
}
/**
 * displayPokemons è una funzione che prende la lista dei pokemon (array)
 * e per ognuno, chiama la funzione createPokemonCard,, la quale
 * prende come input i dati dei pokemon e ci torna una stringa
 * che contiene dell'HTML con all'interno i dati del singolo pokemon.
 * Poi unisce queste stringhe e le "RENDERIZZA" in pagina
 */
export function displayPokemons() {
  const pokemonCardsArray = [];
  for (const pokemon of filteredPokemons) {
    pokemonCardsArray.push(createPokemonCard(pokemon));
  }
  pokedex.innerHTML = pokemonCardsArray.join("");
}
