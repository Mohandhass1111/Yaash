//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import FC from "./components/FunctionalComp";
import { ClassComp1 } from "./components/ClassComp";
import Click from "./components/Click";
import Counter from "./components/Counter";
import Clsprops from "./components/Clsprops";
import Funcprops from "./components/Funcprops";
import ClassState from "./components/ClassState";
import HandleClick from "./components/HandleClick";
import Cond from "./components/Cond";
import Ternary from "./components/Ternary";
import List from "./components/List";
import ListKeys from "./components/ListKeys";
import Lists from "./components/Lists";
import Homeprops from "./components/Homeprops";
import Form from "./components/Form";
import Count from "./components/Count";
import HooksCounter from "./components/HooksCounter";
import HooksCounterTwo from "./components/HooksCounterTwo";
import Spread from "./components/Spread";
import HooksCounterThree from "./components/HooksCounterThree";
import HooksCounterFour from "./components/HooksCounterFour";
import HooksButton from "./components/HooksButton";
import Contextcomp1 from "./components/Contextcomp1";
import ContextComp2 from "./components/ContextComp2";
import ContextComp3 from "./components/ContextComp3";
import UseRef from "./components/UseRef";
import UseRef2 from "./components/UseRef2";
import UseRef3 from "./components/UseRef3";
import UseRef4 from "./components/UseRef4";
import UserefSample from "./components2/UserefSample";
import Useref2 from "./components2/Useref2";
import UseReducer from "./components2/UseReducer";
import Qualify from "./components2/Qualify";
import Employee from "./components2/Employee";
import FactorialCalculator from "./components2/Usememo";
import Map from "./components2/Map";
import UseCallback from "./components2/UseCallback";
import Counter1 from "./Custom/Counter1";
import Counter2 from "./Custom/Counter2";
import UseInput from "./Custom/UseInput";
import FormVaild from "./DP/FormVaild";
import Fruits from "./DP/Fruits";
import Effect from "./DP/Effect";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "wheat" }}>
      <h1
        style={{
          textAlign: "center",
          color: "darkcyan",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
      >
        Welcome to learn React
      </h1>
      <UseInput />
      <FormVaild />
      <Fruits />
      <Effect />
      <Counter1 />
      <Counter2 />
      <UseCallback />
      <Map />
      <FactorialCalculator />
      <Employee />
      <Qualify />
      <UseReducer />
      <UserefSample />
      <Useref2 />
      <Form />
      <ContextComp2 />
      <ContextComp3 />
      <UseRef />
      <UseRef2 />
      <UseRef3 />
      <UseRef4 />
      <Spread />
      <HooksCounter />
      <HooksCounterTwo />
      <HooksCounterThree />
      <HooksCounterFour />
      <HooksButton />
      <Count />
      <FC />
      {/* <ClassComp /> */}
      <Homeprops
        sq_fit="4742"
        type="SQRT"
        builders="casagrand cosmos"
        city="CBE"
      />
      <ClassComp1 />
      <Click />
      <Counter />
      <Clsprops about="About:" />
      <Clsprops name="React" place="Intelligence" />
      <Clsprops name="Clever" place="Super Human Intelligence">
        <button>Done</button>
      </Clsprops>
      <Funcprops brand="Audi q7" name="Car" />
      <ClassState />
      <HandleClick />
      <Cond />
      <Ternary />
      <List />
      <ListKeys />
      <Lists />
      <Contextcomp1 />
    </div>
  );
}

export default App;
