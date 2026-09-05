
import './App.css'
// line 4 for default export
// import TestComponent from './TestComponent'

import Card from './Cards/Card.jsx';


// line 7 for manual export
// import { TestComponent } from './TestComponent'

let person = {
  name: 'Borsa',
  age: 26,
  isMarried : 'Married'
}

let {name, age, isMarried} = person;
// console.log(name);

function App() {


  // return <TestComponent/>

  // return <Card name = {name} age = {age} isMarried={isMarried}/> // props 

  return <Card name = {name} age={age} isMarried={isMarried}>
    <div>
      <p>I am Sajal Mazumder.</p>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
      </ul>
    </div>
    <div>
      All the best for us.
    </div>
  </Card>
}

export default App
