import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
