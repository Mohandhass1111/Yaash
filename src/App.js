//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import FC from './components/FunctionalComp';
import {ClassComp1} from './components/ClassComp';
import Click from './components/Click';
import Counter from './components/Counter';
import Clsprops from './components/Clsprops';
import Funcprops from './components/Funcprops';
import ClassState from './components/ClassState';
import HandleClick from './components/HandleClick';
import Cond from './components/Cond';
import Ternary from './components/Ternary';
import List from './components/List';
import ListKeys from './components/ListKeys';
import Lists from './components/Lists';
import Homeprops from './components/Homeprops';
import Form from './components/Form';
import Count from './components/Count';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import Spread from './components/Spread';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterFour from './components/HooksCounterFour';
import HooksButton from './components/HooksButton';




function App() {
  return (
    <div className="App" style={{backgroundColor:"wheat"}}>
      <h1 style={{textAlign:"center", color:"ActiveBorder"}}>Welcome to learn React</h1>
      <Form/>
      <Spread/>
      <HooksCounter/>
      <HooksCounterTwo/>
      <HooksCounterThree/>
      <HooksCounterFour/>
      <HooksButton/>
      <Count/>
      <FC />
       {/* <ClassComp /> */}
       <Homeprops sq_fit = "4742" type="SQRT" builders="casagrand cosmos" city="CBE"/>
      <ClassComp1 />
      <Click />
      <Counter />
      <Clsprops about="About:"/>
      <Clsprops name="React" place= "Intelligence" />
      <Clsprops name="Clever" place = "Super Human Intelligence">
      <button>Done</button></Clsprops>
      <Funcprops brand="Audi q7" name="Car"/>
      <ClassState/>
      <HandleClick/>
      <Cond/>
      <Ternary/>
      <List/>
      <ListKeys/>
      <Lists/>
    </div>
  );
}

export default App;
