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

  const sortClick = () => {
    console.log("click on sort button");
  };

  const clearClick = () => {
    console.log("click on clear button");
  };

  return (
    <div className="App">
      <Header />
      <InputValues setState={setState} />
      <AlgoInfo outputValues={state.outputValues} />
      <SelectSort setState={setState} />
      <OutputValues outputValues={state.outputValues} />
      <ButtonSort sortClick={sortClick} />
      <ButtonClear clearClick={clearClick} />
      <GraphSort outputValues={state.outputValues} />
      <Footer />
    </div>
  );
}

export default App;
