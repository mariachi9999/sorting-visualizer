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
import axios from "axios";

function App() {
  const [state, setState] = useState({
    inputValues: "",
    selectedSort: "",
    outputValues: [],
  });

  const sortClick = async () => {
    if (state.selectedSort === "") {
      alert(
        "Upss...it seems that you dont select an algorithm! Pick one, please!"
      );
    } else if (state.inputValues === "") {
      alert(
        "Upss...it seems that you dont add numbers on input checkbox! Do it, please!"
      );
    } else {
      let route = state.selectedSort.toLowerCase();
      let split = state.inputValues.split(",");
      let body = split.map((stringNumber) => Number(stringNumber));
      let response = await axios.post(`http://localhost:3001/${route}`, body);
      setState((prevState) => {
        return {
          ...prevState,
          outputValues: response.data.response,
        };
      });
    }
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
          <div className="container-box3">
            <ButtonSort sortClick={sortClick} />
            <ButtonClear clearClick={clearClick} />
          </div>
        </div>
        <div class="container-box2">
          <AlgoInfo outputValues={state.outputValues} />
          <div class="container-box3">
            <OutputValues outputValues={state.outputValues} />
            <GraphSort outputValues={state.outputValues.sortedArr} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
