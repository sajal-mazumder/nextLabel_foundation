

import './App.css'



// import {TestComponent, TestComponent2, NameingCard } from './TestComponents';  // for naming export
// import AnotherComponent from '../AnotherComponent';
// import MoreTestComponent, { MyName } from './MoreTestComponent';
import Card from './Cards/Card';
// import TestComponent from './TestComponents';  // for default export

import Count from './Cards/Count'
import Count2 from './Cards/Count2'
import Display from './Cards/Display'

function App(){
  const [counting, setCount] = useState('')
  return(
    <>
    <Count2 counting = {counting} setCount = {setCount}/>
    <Display counting = {counting} setCount = {setCount}/>
    </>
  )
}

export default App;

// function App(){
//   return(
//     <>
//     {/* <AnotherComponent/> */}
//     <TestComponent/>
//     {/* <MoreTestComponent/> */}
//     <TestComponent2/>
//     {/* <MyName/> */}
//     <Card name = 'sajal' age = {4}/>
//     </>
//   )
// }
// export default App;

//! object destructuring

// const obj = {name: 'Sajal', age: 35, isMarried: 'true', hasJob: 'true'}
// const {name, age, isMarried, hasJob} = obj;

// function App(){
//   return(
//     <>
//       {/* <NameingCard name = 'Sajal' age = {34} isMarried = 'yes' hasJob = 'true'/> */}
//       {/* <NameingCard 
//         name = {name} 
//         age = {age} 
//         isMarried = {isMarried} 
//         hasJob = {hasJob}/> */}

//         {/* // chldren */}
//         {/* <NameingCard 
//         name = {name} 
//         age = {age} 
//         isMarried = {isMarried} 
//         hasJob = {hasJob}>
//         <h2>ha ha ha</h2>
//         <h2>ha hu ha hu</h2>
//         <p>Our Bangladesh. We love our country very much. But day by day the  country is being unstable.</p>
//       </NameingCard> */}
//     </>
//   )
// }
// export default App;


// const person = {name: 'Sajal', age: 5}
// const {name, age} = person;

// function App(){
//   return(
//     <>
//       <Card name = {name} age = {age}>
//         {/* <h3 className='style'>we are here also. and you can contact us.</h3>  */}
//       </Card>
//     </>
//   )
// }
// export default App;



// dynamic rendering from  array

// let persons = [
//   {name: 'Sajal', age: 35, isMarried: 'Yes'},
//   {name: 'Borsa', age: 25, isMarried: 'Yes'},
//   {name: 'Shubro', age: 10, isMarried: 'No'},
//   {name: 'Abhro', age: 5, isMarried: 'No'},
//   {name: 'Purnima', age: 24, isMarried: 'Yes'},
//   {name: 'Ahona', age: 18, isMarried: 'Yes'},
// ]

// function App(){
//   return(
//     <>
//       {/* {persons.map((person) => <Card name = {person.name} age = {person.age} isMarried = {person.isMarried}>
//       </Card>)} */}

//       {/* // applying methods  */}

//       {/* {persons
//       .filter(person => person.age > 14)
//       .map(person => <Card name = {person.name} age = {person.age} isMarried={person.isMarried} ></Card>)} */}

//       {persons
//       .filter(person => person.age > 14)
//       .sort((a, b) => b.age - a.age)
//       .map(person => <Card  name = {person.name} age = {person.age} isMarried={person.isMarried}></Card>)}

//       <Count/>
//     </>
//   )
// }
// export default App;

// let persons = [
//   {name: 'Sajal', age: 35, isMarried: 'Yes'},
//   {name: 'Borsa', age: 25, isMarried: 'Yes'},
//   {name: 'Shubro', age: 10, isMarried: 'No'},
//   {name: 'Abhro', age: 5, isMarried: 'No'},
//   {name: 'Purnima', age: 24, isMarried: 'Yes'},
//   {name: 'Ahona', age: 18, isMarried: 'Yes'}
// ]


// function App(){

//   const [name, setName] = useState('')
//   const [age, setAge] = useState('')
//   const [persons, setPersons] = useState([
//     {name: 'Sajal', age: 35},
//     {name: 'Borsa', age: 25},
//     {name: 'Shubro', age: 10},
//     {name: 'Abhro', age: 5},
//     {name: 'Purnima', age: 24},
//     {name: 'Ahona', age: 18}
//   ])

//   const handleSubmit = (e) => {
//     // console.log(e)
//     e.preventDefault();
//     // console.log(name, age)
//     // console.log({name, age})
//     // setPersons([...persons,{name, age}])
//     setPersons((prev) => [...prev, {name, age}]) // another way 

//     setName('')
//     setAge('')
//   }

//   return(
//     <>

//       <form action="" onSubmit={handleSubmit} >
//         <input type="text" onChange={(e) => setName(e.target.value)} value = {name} className='btnStyle'/>
//         <input type="number" onChange={(e) => setAge(e.target.value)} value = {age} className='btnStyle'/>
//         <button type='submit' className='btnStyle'>Submit</button>
//       </form>

//       {persons
//       .filter(person => person.age > 14)
//       .sort((a, b) => b.age - a.age)
//       .map(person => <Card  name = {person.name} age = {person.age} isMarried={person.isMarried}></Card>)}
//     </>
//   )
// }
// export default App;




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

