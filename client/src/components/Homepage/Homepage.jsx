import "./Homepage.module.css";
import InputValues from "../InputValues/InputValues";
import AlgoInfo from "../AlgoInfo/AlgoInfo";
import SelectSort from "../SelectSort/SelectSort";
import OutputValues from "../OutputValues/OutputValues";
import ButtonSort from "../ButtonSort/ButtonSort";
import ButtonClear from "../ButtonClear/ButtonClear";
import GraphSort from "../GraphSort/GraphSort";
import { useState } from "react";
import axios from "axios";

function Homepage() {
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
      let response = await axios.post(
        `https://sort-visualizer-jala.herokuapp.com/${route}`,
        body
      );
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
  );
}

export default Homepage;
