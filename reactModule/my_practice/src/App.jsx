
import './style.css'
import './App.css'
import {TestComponent} from './TestComponents';  // for naming export
import AnotherComponent from '../AnotherComponent';
// import TestComponent from './TestComponents';  // for default export


function App(){
  return <div>
    <TestComponent/>
    <AnotherComponent/>
  </div>;
  
}

export default App;