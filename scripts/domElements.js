// se in index.html importo prima l'altro file JS
// qui avrò accesso alle variabili dell'altro file
/* const showPokemonButton = document.getElementById("show-pokemon"); */
const pokedex = document.getElementById("pokemon-container");
const typesContainer = document.getElementById("pokemon-types");
const loaderModal = document.getElementById("loader-modal")
const pokemonModal = document.getElementById('pokemon-modal')
const closeButton = document.getElementById('close-button')
const pokemonImg = document.getElementById('pokemon-image')
const pokemonName = document.getElementById('pokemon-name')
const statsContainer = document.getElementById('stats-container')
export { pokedex, typesContainer, loaderModal, pokemonModal, closeButton, pokemonImg, pokemonName, statsContainer}