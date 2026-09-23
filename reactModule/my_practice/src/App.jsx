

import './App.css'
import {useState} from 'react'
import Display from './Cards/Display'
import Count2 from './Cards/Count2'
import NestedDisplay from './Cards/NestedDisplay';

function App (){

  const [counting, setCounting] = useState(0);

  return(
    <>
    <h3>Parents</h3>
    <Count2 counting = {counting} setCounting = {setCounting}/>
    <Display counting = {counting} setCounting = {setCounting}/>
    </>
  )
}
export default App;