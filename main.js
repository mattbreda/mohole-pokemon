import "./style.css";
import {
  displayPokemons,
  displayTypes,
  addListenerToAllButtons,
  addListerToPokemons,
} from "./scripts/domHandlingFunctions";

import { loaderModal } from "./scripts/domElements";
/* import fetchData from "./scripts/api"; */

// settiamo un listener "DOMContentLoaded", ovvero, una volta che il browser avrà renderizzato il dom
// (quindi solo l'html e il css), andiamo a mettere un timer di 3000ms (3 secondi), che allo scadere,
// carichi tutti i pokemon, i tipi e nasconda il loader
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    displayPokemons();
    displayTypes();
    addListenerToAllButtons();
    addListerToPokemons();
    loaderModal.style.display = "none";
  }, "1");
});

// ciao!