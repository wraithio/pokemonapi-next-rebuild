export const saveToFavorites=async (pokeId:string) =>{
    //get the current values that are saved into local storage
  
    let pokeArr = await getFavorites();

    //add new name into our pokeArr array
    if (!pokeArr.includes(pokeId)) {
        pokeArr.push(pokeId);
    }
    

    //save updated array to local storage
    //JSON.stringify: Converts the array (or object) into a JSON string that can be stored in local storage.
    if (typeof window !== 'undefined'){
    localStorage.setItem('PokeIds', JSON.stringify(pokeArr));
    }
}

export const getFavorites=()=>{
    // get all of the values that are stored in cityArr in local storage\
    if (typeof window !== 'undefined'){

        let favoritesData = localStorage.getItem('PokeIds');
        // console.log("FAVORITES DATA" +JSON.stringify(favoritesData));
        
        if (favoritesData == null) {
            return [];
        }
        
        //JSON.parse: Converts the JSON string back into an array (or object) so you can work with it.
        return JSON.parse(favoritesData);
    }
}

export const removeFromFavorites=async (pokeId:string)=>{
    let pokeArr =  getFavorites();

    // find the index of the name in local storage

    let pokeIdIndex = pokeArr.indexOf(pokeId);

    //remove the name from the array using the splice method.
    //Start at the index of name and remove 1 item
    pokeArr.splice(pokeIdIndex, 1);

    // save updated array to local storage
    if (typeof window !== 'undefined'){
        localStorage.setItem('PokeIds', JSON.stringify(pokeArr));
    }
}

export const getFavoritesNames=async()=>{

    let favoritesArr:string[]  = getFavorites();

    let favoritesNamesArr: string[]=[];
    for (let j=0; j<favoritesArr.length ;j++) // displays items 
    {
        const pokeIdPromise= await fetch ("https://pokeapi.co/api/v2/pokemon/"+favoritesArr[j]);
        const pokeIdData = await pokeIdPromise.json();
        favoritesNamesArr.push(pokeIdData.name);
     }
     return favoritesNamesArr;
}


