
import './Cards/cards.css'
import './App.css'
// line 4 for default export
// import TestComponent from './TestComponent.jsx';

// import Test from './TestComponent.jsx'
// import Testy from './TestComponent'
// import FullTest from './TestComponent'
// import CardsSend from './Cards/Card.jsx'

// import Card from './Cards/Card.jsx';


// line 7 for manual export
// import { TestComponent } from './TestComponent'

import CardsSend from './Cards/Card';
// let person = {
//   name: 'Borsa',
//   age: 36,
//   // isMarried : 'Married',
//   weight: 67
// }

// let {name, age, weight} = person;
// // console.log(name);

let persons = [
  {name: 'Sajal Mazumder', age: 36, weight: 67, height: 1.6},
  {name: 'Sanjoy Mazumder', age: 43, weight: 62, height: 1.62},
  {name: 'Atul Mazumder', age: 38, weight: 56, height: 1.5},
  {name: 'Shubro Mazumder', age: 10, weight: 17, height: .9},
  {name: 'Abhro Mazumder', age: 3, weight: 12, height: .6},
]

function App() {
  // return(
  //   <CardsSend name = {name} age = {age} weight={weight}>
      
  //     <h1>Sajal</h1>
  //   </CardsSend>
  // )

  return(
    <div>
      {/* <CardsSend name = 'Sajal' age = {15} weight={67}/>,
      <CardsSend name = 'Ramesh' age = {45} weight={57}/>,
      <CardsSend name = 'Akash' age = {51} weight={77}/> */}

      // array maping
      {persons.filter((person) => person.weight > 20)
      .sort((a, b) => a.age - b.age)
      .map((person) =>
        <CardsSend name = {person.name} age = {person.age} weight={person.weight} height = {person.height} />
      )}
    </div>
  )
    
}

export default App
