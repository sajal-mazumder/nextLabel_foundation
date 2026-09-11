
import './style.css'
import './App.css'
import {TestComponent, TestComponent2, NameingCard }from './TestComponents';  // for naming export
import AnotherComponent from '../AnotherComponent';
import MoreTestComponent, { MyName } from './MoreTestComponent';
// import TestComponent from './TestComponents';  // for default export


// ! object destructuring

const obj = {name: 'Sajal', age: 35, isMarried: 'true', hasJob: 'true'}
const {name, age, isMarried, hasJob} = obj;


function App(){
  return(
    <>
    <AnotherComponent/>
    <TestComponent/>
    <MoreTestComponent/>
    <TestComponent2/>
    <MyName/>
    {/* <NameingCard name = 'Sajal' age = {34} isMarried = 'yes' hasJob = 'true'/> */}
    {/* <NameingCard 
      name = {name} 
      age = {age} 
      isMarried = {isMarried} 
      hasJob = {hasJob}/> */}

      {/* // chldren */}
      <NameingCard 
        name = {name} 
        age = {age} 
        isMarried = {isMarried} 
        hasJob = {hasJob}>
        <h2>ha ha ha</h2>
        <h2>ha hu ha hu</h2>
        
      </NameingCard>
    </>
  )
}
export default App;



/*
function App(){

  return <div>  // system 1
    <TestComponent/>
    <AnotherComponent/>
  </div>;

  return( // system 2
    <>
    <TestComponent/>
    <AnotherComponent/>
    </>
  )

  return[  // sysem 3
    <TestComponent key = 'Test'/>,
    <AnotherComponent key = 'Another'/>
  ]
  
}

export default App;
*/

