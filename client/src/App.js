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

function App() {
  return (
    <div className="App">
      <Header />
      <InputValues />
      <AlgoInfo />
      <SelectSort />
      <OutputValues />
      <ButtonSort />
      <ButtonClear />
      <Footer />
      <GraphSort />
    </div>
  );
}

export default App;
