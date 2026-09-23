

import {createContext, useState} from 'react'

export const CounterContext = createContext();

import '../style.css'

export default function CounterProvider({children}){
    const [counting, setCounting] = useState(0)
    return(
        <CounterContext.Provider value={{counting, setCounting}}>
        {children}
        </CounterContext.Provider>
    )
}