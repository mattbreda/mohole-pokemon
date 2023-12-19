import axios from "axios";
import { editPokemonModal } from "./domHandlingFunctions";
export default async function fetchPokemonData(name) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const response = await axios.get(apiUrl)
  if(response.status === 200) {
    editPokemonModal(response.data)
    return response.data
  } else {
    console.error(response.status)
  }
}


/* export default function fetchPokemonData(name) {
  // Define the API endpoint
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

  // Use the fetch function to make the HTTP request
  fetch(apiUrl)
    .then((response) => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      return response.json();
    })
    // this .then waits for the "real data" (or readable data)
    .then((data) => {
      // Handle the retrieved data
      console.log("Data:", data);
      // You can do further processing with the data here
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });
}
 */