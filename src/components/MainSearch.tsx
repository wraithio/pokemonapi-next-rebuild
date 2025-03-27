'use client'

import {getEvolutionPath, getLocation, getPokemon, getRandomNumber} from'@/services/pokemonservice';
import React, { useEffect, useState } from 'react'
import PokeGrid from './PokeGrid';
import Favorites from './Favorites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';


const NavbarSearch = () => {
const [searchValue, setSearchValue] = useState<string>('1');
const [pokeId,setPokeId] = useState<string>('1');
const [pokeName,setPokeName] = useState<string>('');
const [pokeImg,setPokeImg]=useState<string>('./assets/dexlogo.png');
const [pokeImgShiny,setPokeImgShiny] = useState<string>('./assets/dexlogo.png');
const [pokeType, setPokeType]=useState<string>('');
const [location,setLocation]=useState<string>('');
const [abilities, setAbilities]=useState<string>('');
const [moves,setMoves]=useState<string>('');
const [evoPath,setEvoPath]=useState<string[]>(['1']); 

// to handle when user hits "Enter" for search
const handleKeyDown = (event:any) => {
  if (event.key === "Enter") {
    console.log("DISPLAY " + searchValue);
    console.log("ENTER search");
    getPokemonData(searchValue);
  }
};


const generateRandomPokemon =()=>{
setPokeId( getRandomNumber());

}

const getLocationData= async (pokeId:string)=>{
  setLocation(await getLocation(pokeId));
}

const getEvoPathData=async (pokeId:string)=>{
  console.log("GET EVO PATH DATA ENTERED") ;
  setEvoPath(await getEvolutionPath(pokeId));
}

const getPokemonData = async(searchValue:string)=>{
  const data =  await getPokemon(searchValue);
  setPokeId(data.id);
  setPokeName(data.name);
  setPokeImg (data.sprites.other["official-artwork"].front_default);
  setPokeImgShiny(data.sprites.other["official-artwork"].front_shiny);

  //create string type
  let strType:string='N/A'
  if (data.types.length>0)
      {
          strType=data.types.map((types:any)=> types.type.name).join(",");
          console.log("TYPES:"+strType);
          setPokeType(strType);
   
      }
  else {
      console.log ("Doesnt have type");
  }

  
   //iterate through all abilities

   let strAbilities:string ="N/A"
   if (data.abilities.length>0)
       {
           
           strAbilities = data.abilities.map((abilities:any)=> abilities.ability.name).join(', ');
           console.log(strAbilities);
           setAbilities(strAbilities);
       }
   else {
       console.log ("Doesnt have ability");
   }

   //iterate through Moves
   let strMoves:string  ="N/A";
   if (data.moves.length>0)
       {
           strMoves = data.moves.map((moves:any)=> moves.move.name).join(', ');// why does it not work if i use string
           console.log(strMoves);
           setMoves(strMoves);
       }
       else {
        
           console.log("Doesnt have a move");
       }
       


}

useEffect(()=>{
  getPokemonData(pokeId);
},[])

useEffect(()=>{
  getPokemonData(pokeId);
  getLocationData(pokeId);
  getEvoPathData(pokeId);
  
}
,[pokeId]);


  return (
    <div>

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <p  className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="./assets/dexlogo.png" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pokedex</span>
  </p>
  <div className="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar2" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."  onChange={(e) => setSearchValue(e.target.value)}  onKeyDown={handleKeyDown} />
    </div>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar1" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
     
        {/* <li id="randomPokemonlink"> */}
          <div className="flex">   <a href="#" className="block py-2 px-3  rounded-sm border-1 border-gray-400 text-gray-900 font-extrabold  hover:bg-yellow-400  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={generateRandomPokemon}>Generate a Random Pokemon <FontAwesomeIcon icon={faShuffle} /></a>

           
         
          </div>
          
        {/* </li> */}
      
      </ul>
    </div>

  </div>
</nav>

<Favorites/>
<PokeGrid pokeId={pokeId} pokeName={pokeName} pokeImg={pokeImg} pokeImgShiny={pokeImgShiny} pokeType={pokeType} abilities={abilities} location={location} moves={moves} evoPath={evoPath}/>
    </div>
  )
}

export default NavbarSearch