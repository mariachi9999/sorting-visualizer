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
    setState({
      inputValues: [],
      selectedSort: "",
      outputValues: [],
    });
  };

  return (
    <div className="App">
      <Header />
      <div class="container">
        <div class="container-box1">
          <InputValues inputValues={state.inputValues} setState={setState} />
          <SelectSort setState={setState} selectedSort={state.selectedSort} />
          <ButtonSort sortClick={sortClick} />
          <ButtonClear clearClick={clearClick} />
        </div>
        <div class="container-box2">
          <AlgoInfo outputValues={state.outputValues} />
          <div class="container-box3">
            <OutputValues outputValues={state.outputValues} />
            <GraphSort outputValues={state.outputValues} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
