

import './App.css'
import {useState} from 'react'
import Display from './Cards/Display'
import Count2 from './Cards/Count2'
import CounterProvider from './Providers/Counter.Provider'

// function App (){

//   const [counting, setCounting] = useState(0);

//   return(
//     <>
//     <h3>Parents</h3>
//     <Count2 counting = {counting} setCounting = {setCounting}/>
//     <Display counting = {counting} setCounting = {setCounting}/>
//     <CounterProvider/>
//     </>
//   )
// }
// export default App;


function App (){

 

  return(
    <CounterProvider>
    <h3>Parents</h3>
    <Count2/>
    <Display/>
    </CounterProvider>
  )
}
export default App;