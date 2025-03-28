'use client'

import { createContext, useContext, useState } from "react";

interface DataInterface {
    name: string,
    setName : (name: string)=>void;
    }


const NameContext =createContext<DataInterface>({name:'',setName:name=>''})

export function AppWrapper ({children}:{children:React.ReactNode}){
    const [name, setName]=useState<string>('');

    return(
        <NameContext.Provider value={{name,setName}}>
        {children}
        </NameContext.Provider>
    )
}

export function useNameContext(){
    return useContext(NameContext);
}