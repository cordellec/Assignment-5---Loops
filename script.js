//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question asking how many favourite pokemon they have, wrapped parse int so that the input would would be a number//
let numOfPokemon = parseInt(prompt("How many favorite Pokemon do you have?"));      

// Left the array empty because we will be filling it with the users favourite pokemon //
let pokemonArray = []; 

// i starts at 0 and is less than the number that will be entered into numOfPokemon, than i++ is used to increment up by 1//
for (let i = 0; i < numOfPokemon; i++) {
  // created pokemonLeft so that it will subtract i from numOfPokemon//
  let pokemonLeft = numOfPokemon - i;
  // created pokemonNames so that it creates a prompt asking for their favouirte pokemon that gives i +1  and shows how many pokemonLeft are left//
  let pokemonNames = prompt(`Please enter your #${i+1} favorite Pokemon. ${pokemonLeft} Pokemon left.`);
  // pokemonArray is empty so i added .push() to push the pokemonNames to the end of an array//
  pokemonArray.push(pokemonNames); 
} 
// creating an output variable so we can link it to the html //
let output = pokemonArray

// we are targetting the "output" id class on the html page to output all of the pokemon we entered into pokemonArray// 
document.getElementById("output").innerHTML = `All you favourite Pokemon are: ${output}`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
