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
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Homepage from "./components/Homepage/Homepage";

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
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
