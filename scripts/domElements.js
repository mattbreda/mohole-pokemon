// se in index.html importo prima l'altro file JS
// qui avrò accesso alle variabili dell'altro file
const showPokemonButton = document.getElementById("show-pokemon");
const pokedex = document.getElementById("pokemon-container");
const typesContainer = document.getElementById("pokemon-types");
const loaderModal = document.getElementById("loader-modal")
export { pokedex, showPokemonButton, typesContainer, loaderModal}