import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import InputValues from "./components/InputValues/InputValues";
import AlgoInfo from "./components/AlgoInfo/AlgoInfo";
import SelectSort from "./components/SelectSort/SelectSort";

function App() {
  return (
    <div className="App">
      <Header />
      <InputValues />
      <AlgoInfo />
      <SelectSort />
    </div>
  );
}

export default App;
