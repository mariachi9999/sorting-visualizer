import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import InputValues from "./components/InputValues/InputValues";
import AlgoInfo from "./components/AlgoInfo/AlgoInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <InputValues />
      <AlgoInfo />
    </div>
  );
}

export default App;
