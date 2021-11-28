<template>
  <Navbar />
  <div class="container">
    <div class="container-box1">
      <Input />
    </div>

    <div class="container-box2">
      <AlgoInfo />
      <div class="container-box3">
        <OutputValues />
        <GraphicalSorting />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AlgoInfo from "./components/AlgoInfo";
import OutputValues from "./components/OutputValues";
import GraphicalSorting from "./components/GraphicalSorting";
import Input from "./components/Input";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Input,
    AlgoInfo,
    OutputValues,
    GraphicalSorting,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
}

.container-box1 {
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  padding: 10px 10px;
  min-height: 100%;
}

.container-box2 {
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  flex-basis: 70%;
  min-height: 100%;
}

.container-box3 {
  display: flex;
  justify-content: space-around;
  min-height: 100%;
  flex-basis: 100%;
}
</style>
