'use client'
import { getFavoritesNames } from '@/services/localStorage';
import React, { useEffect, useState } from 'react'

const Favorites = () => {
    const [favoritesList, setFavoritesList ]=useState<string[]>([]);

    const getFavoritesNamesList =async()=>{
        const favoritesNamesData =  await getFavoritesNames();
        setFavoritesList(favoritesNamesData);
      }
    
      useEffect(()=>{
        getFavoritesNamesList();
      },[])

      useEffect(()=>{
        getFavoritesNamesList();
      },[favoritesList])


  return (
    <>
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  <span className="sr-only">Open sidebar</span>
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg> 
  <p className="ps-2 font-bold">
    Display Favorites
  </p>
</button>
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <div  id= "favoriteSection" className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

    
     <h3 className="flex items-center mb-5 text-lg font-bold"> Your Favorites</h3>
     <ul className="space-y-2 font-medium" id="favoriteitemsSection">
      {/* <!-- auto generated li based on favorites Array--> */}
      {favoritesList.length>0 ? favoritesList.map((favorite,index) => (
        <li className="ps-3 hover:bg-yellow-100" key={index}>{favorite} </li> 
      )) : <p > No Favorites Added </p>}
      
     </ul>
  </div>
</aside>

    </>
  )
}

export default Favorites