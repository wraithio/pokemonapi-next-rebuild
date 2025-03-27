'use client'
import { getEvolutionPath } from '@/services/pokemonservice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';

import React, { useEffect, useState } from 'react'
import { getFavorites, getFavoritesNames, removeFromFavorites, saveToFavorites } from '@/services/localStorage';
import Favorites from './Favorites';



const PokeGrid = ({ pokeId,pokeName,pokeImg,pokeImgShiny,pokeType,abilities,location,moves,evoPath }: {pokeId:string, pokeName: string,pokeImg:string ,pokeImgShiny:string,pokeType:string,abilities:string,location:string,moves:string,evoPath:string[]}) => {
const [isFavorite,setIsFavorite]=useState<boolean>(false);
  
const addFavorite =()=>
  {
    saveToFavorites(pokeId);
    setIsFavorite(true);
  }

  const removeFavorite =()=>
    {
      removeFromFavorites(pokeId);
      setIsFavorite(false);
    }

  const checkIfFavorite=()=>{
      const favoritesList = getFavorites();
      if (favoritesList.includes(Number(pokeId))){
        setIsFavorite(true);
      }else{
        setIsFavorite(false);
      }
  }

  useEffect(()=>{
    checkIfFavorite();
  },[])

  useEffect(()=>{
    checkIfFavorite();
  },[pokeId])

  useEffect(()=>{
    checkIfFavorite();
  },[isFavorite]);

  return (
    <>
{/* <!-- start grids--> */}
<div className="p-4 sm:ml-64">
  <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

     <div className="flex  items-center justify-center h-auto mb-4 p-4  rounded-sm bg-gray-50 dark:bg-gray-800  hover:bg-amber-100 ">
        <p id="pokeName" className="lg:text-2xl text-gray-900 dark:text-white  font-bold me-5  sm:text-xl uppercase">
        {pokeName}</p>
        {
          isFavorite ? <FontAwesomeIcon icon={faStarSolid} onClick={removeFavorite}/> :  <FontAwesomeIcon icon={faStarRegular}  onClick={addFavorite} />  
        }
        
      
     </div>

     {/* <!--display normal and shiny images--> */}
     <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded-sm bg-gray-50 h-auto dark:bg-gray-800  hover:bg-amber-100">
          
            <img  id="pokeImg" className="flex items-center justify-center" src={pokeImg} alt="Pokemon Img"/>
          
        </div>

        <div className="flex items-center justify-center rounded-sm h-auto bg-gray-50 dark:bg-gray-800  hover:bg-amber-100">
       
            <img  id="pokeImgShiny" className="flex items-center justify-center" src={pokeImgShiny} alt="Pokemon Img"/>
          
        </div>
 
     </div>

     {/* <!--end of normal/shiny images-->

     <!--start info--> */}
     <div className="grid grid-cols-2 gap-4 mb-4">
      
      <div className="flex flex-col items-center justify-start rounded-sm bg-gray-50 h-auto dark:bg-gray-800  hover:bg-amber-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TYPE</h5>
          <p id="pokeType" className="mb-3 text-2xl text-gray-700 dark:text-gray-500">{pokeType}</p>
    
       
      </div>
        <div className="flex flex-col items-center justify-start rounded-sm bg-gray-50 h-auto dark:bg-gray-800  hover:bg-amber-100 ">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ABILITIES</h5>
            <p id="pokeAbilities" className="mb-3 text-2xl text-gray-700 dark:text-gray-500">{abilities}</p>
        </div>

        <div className="flex flex-col items-center justify-start rounded-sm bg-gray-50 h-AUTO dark:bg-gray-800  hover:bg-amber-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LOCATION</h5>
          <p id="pokeLocation" className="mb-3 text-2xl text-gray-700 dark:text-gray-500">{location}</p>
        </div>

        
      
        <div className="flex flex-col items-center justify-start rounded-sm bg-gray-50 h-auto dark:bg-gray-800  hover:bg-amber-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MOVES</h5>
          <p id="pokeMoves" className="mb-3 text-2xl text-gray-700 dark:text-gray-500">{moves}</p>
        </div>
     </div>
     {/* <!--end info-->
      <!--display evo--> */}
  
  <div className="flex  flex-col items-center justify-center h-auto mb-4 rounded-sm bg-gray-50 dark:bg-gray-800  hover:bg-amber-100">
    <h1 id="evoPathHeader" className="text-center text-3xl font-bold">EVOLUTION PATH</h1>

    <div id="carouselSection" className="flex flex-wrap items-center justify-center ">
      {/* <!--generate evolution images--> */}
      
      {evoPath.length>0 ? evoPath.map((pokeEvoImg, index) => (
        <img key={index} className="font-bold text-lg"
          src={pokeEvoImg}></img> 
      )) : <p className='text-2xl'> No Evolution Path </p>}
      
      

    </div>
  </div>
  
  </div>

 

</div>

{/* /* <!--end of grids--> */}
    </>
  )
}

export default PokeGrid