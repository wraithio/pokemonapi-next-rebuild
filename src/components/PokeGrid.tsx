'use client'
import { getEvolutionPath } from '@/services/pokemonservice';
import React, { useEffect, useState } from 'react'



const PokeGrid = ({ pokeName,pokeImg,pokeImgShiny,pokeType,abilities,location,moves,evoPath }: { pokeName: string,pokeImg:string ,pokeImgShiny:string,pokeType:string,abilities:string,location:string,moves:string,evoPath:string[]}) => {


  
  return (
    <>
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  <span className="sr-only">Open sidebar</span>
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg> 
  <p className="ps-2 font-bold">
    Display Favorites
  </p>
</button>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div  id= "favoriteSection" className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

    
     <h3 className="flex items-center ps-2.5 mb-5 text-lg font-bold"> Your Favorites</h3>
     <ul className="space-y-2 font-medium" id="favoriteitemsSection">
      {/* <!-- auto generated li based on favorites Array--> */}
     </ul>
  </div>
</aside>
{/* 
<!--end of side bar-->

<!-- start grids--> */}
<div className="p-4 sm:ml-64">
  <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

     <div className="flex  items-center justify-center h-auto mb-4 p-4  rounded-sm bg-gray-50 dark:bg-gray-800  hover:bg-amber-100 ">
        <p id="pokeName" className="lg:text-2xl text-gray-900 dark:text-white  font-bold me-5  sm:text-xl uppercase">
        {pokeName}
      
        </p>
        
          <i id="starSolidIcon" className="fa-solid fa-star inactive  lg:text-2xl  sm:text-xl text-gray-900 dark:text-white  font-bold me-5"></i>
              <i id="starRegularIcon" className="fa-regular fa-star inactive  lg:text-2xl  sm:text-xl text-gray-900 dark:text-white  font-bold me-5"></i>
  

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

    <div id="carouselSection" className="flex items-center justify-center ">
      {/* <!--generate evolution images--> */}
      
      {/* {evoPath.map((pokeEvoImg, index) => (
        <li key={index} className="font-bold text-lg">
          {pokeEvoImg}
        </li>
      ))} */}
      
      

    </div>
  </div>
  
  </div>

 

</div>



{/* /* <!--end of grids--> */}
    </>
  )
}

export default PokeGrid