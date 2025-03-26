let pokeID = 0;
const limitPokeID= 650; // to cap pokemon search to only 1-5gen

export const getPokemon =async(userInput:string)=>{
            
            const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/`+userInput);
            const data = await promise.json();
            console.log("SERVICE DATA"  +data);
            return data;
            
}          

export const  getLocation= async (pokeID:string)=>{

    const promise = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokeID}/encounters`);
    const data = await promise.json();
    let strLocation="N/A";
    if (data.length>0)
        {
            console.log("LOC COUNT#" + data.length)
            strLocation = data.map((info:any)=> info.location_area.name).join(', ');
            console.log(strLocation);
        }
        else 
        {console.log("NO LOCATION")};

        return strLocation;
}

export const getEvolutionPath=async (pokeID:string)=>{
    
    const speciesPromise = await fetch (`https://pokeapi.co/api/v2/pokemon-species/${pokeID}`);
    const speciesData = await speciesPromise.json();


    const evoPathPromise = await fetch(`${speciesData.evolution_chain.url}`);
    const evoPathData = await evoPathPromise.json();

    let evoPathArr= [];
    if (evoPathData.chain.evolves_to.length>0)
        {

         
            evoPathArr.push(evoPathData.chain.species.name);
            for (let i =0 ; i< evoPathData.chain.evolves_to.length;i++)
                {   
                    evoPathArr.push(evoPathData.chain.evolves_to[i].species.name);
                    console.log(` EVOLVES 1st loop  ${evoPathData.chain.evolves_to[i].species.name}`);  
                    if (evoPathData.chain.evolves_to[i].evolves_to.length>0) 
                        {
                            for (let j=0; j < evoPathData.chain.evolves_to[i].evolves_to.length;j++)
                                {
                                    evoPathArr.push(evoPathData.chain.evolves_to[i].evolves_to[j].species.name);
                                    console.log(` EVOLVES 2nd loop  ${evoPathData.chain.evolves_to[i].evolves_to[j].species.name}`);  

                                    console.log(`${evoPathData.chain.evolves_to[i].evolves_to[j].evolves_to.length}`);   

                                    for (let k=0; k<evoPathData.chain.evolves_to[i].evolves_to[j].evolves_to.length;k++ )
                                        {
                                            evoPathArr.push(evoPathData.chain.evolves_to[i].evolves_to[j].evolves_to[k].species.name);
                                            console.log(` EVOLVES 3rd loop  ${evoPathData.chain.evolves_to[i].evolves_to[j].evolves_to[k].species.name}`);  

                                        }

                                }
                        }
                        else
                        {
                            console.log("no evolution path 2");
                        }
                    
                }
        }
        else {
            console.log("no evolution path 1");
        }
        


let evoPathImgArr=[];
// if no evolution path set it to N/A
if (evoPathArr.length<=0)
    { 
        console.log("EVO PATH LENGTH IS ZERO");
      
    }
    //create element and display image of thhe pokemon evolution
    else{
      
        for(let m=0;m<evoPathArr.length;m++)
            {
                const pokeIdPromise= await fetch ("https://pokeapi.co/api/v2/pokemon/"+evoPathArr[m]);
                const pokeIdData = await pokeIdPromise.json();
                evoPathImgArr.push(pokeIdData.sprites.other["official-artwork"].front_default);
      
            }
       
        }
        
return evoPathImgArr;
}

export const getRandomNumber =()=>
{
  return (Math.floor(Math.random() * (limitPokeID - 1 + 1)) + 1).toString();
  

}





