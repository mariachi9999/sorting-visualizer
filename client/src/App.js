import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import InputValues from "./components/InputValues/InputValues";
import AlgoInfo from "./components/AlgoInfo/AlgoInfo";
import SelectSort from "./components/SelectSort/SelectSort";
import OutputValues from "./components/OutputValues/OutputValues";
import ButtonSort from "./components/ButtonSort/ButtonSort";
import ButtonClear from "./components/ButtonClear/ButtonClear";
import Footer from "./components/Footer/Footer";
import GraphSort from "./components/GraphSort/GraphSort";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    inputValues: [],
    selectedSort: "",
    outputValues: [],
  });

  return (
    <div className="App">
      <Header />
      <InputValues setState={setState} />
      <AlgoInfo outputValues={state.outputValues} />
      <SelectSort setState={setState} />
      <OutputValues outputValues={state.outputValues} />
      <ButtonSort />
      <ButtonClear />
      <GraphSort outputValues={state.outputValues} />
      <Footer />
    </div>
  );
}

export default App;
