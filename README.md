// Submitted By: Karen Cadavos

// Date Revised: 03/28/2025

//Exercise Name: Pokemon API Next Rebuild

Description : Create a single page pokemon application using the Pokemonapi and Next.JS / TypeScript


Requirements:

using the Pokemon API https://pokeapi.co/
Ability to search by name and Pokedex Number
only Gen 1 - 5 pokemon
Ability to search by name and Pokedex Number
Ability to get a random pokemon
image of pokemon and shiny form
Pokemon Name
show 1 location from any game. If pokemon doesn't have a location, have it return "N/A"
Element Typing
All possible abilities
All possible moves
Show Evolutionary Paths, if pokemon doesn't have an evolutionary path, have it return "N/A"
And a Favorites list


//Peer Reviewed by: Aaron Robinson
    Everything works as intended and meets project requirements. I like your use of components, they keep the code organzied and easy to read. Thats something I overlooked when creating mine. One small nitpick is that the locations and moves that print out are lowercase and hypenated. I used a simple format function to make them look a bit better, try it out if can. Great job!
    
    function formatString(input: string): string {
  return input
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}