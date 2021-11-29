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

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
        <div class="container-box1">
          <InputValues />
          <SelectSort />
          <ButtonSort />
          <ButtonClear />
        </div>
        <div class="container-box2">
          <AlgoInfo />
          <div class="container-box3">
            <OutputValues />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
