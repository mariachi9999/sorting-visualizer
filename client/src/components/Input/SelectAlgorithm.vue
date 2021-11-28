<template>
  <div placeholder="Select an Algorithm">
    <select v-model="myModel" class="selector">
      <option
        v-for="myOption in myOptions"
        :value="myOption"
        :key="myOption.value"
      >
        {{ myOption.text }}
      </option>
    </select>
  </div>
</template>
 
<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const myModel = ref("");
    const myOption = ref("");
    let myOptions = [
      { value: 1, text: "Selection" },
      { value: 2, text: "Bubble" },
      { value: 3, text: "Insertion" },
      { value: 4, text: "Merge" },
      { value: 5, text: "Heap" },
      { value: 6, text: "QuickSort" },
    ];
    return { myOptions, myModel, myOption };
  },
};
</script>

<style scoped>

.selector {
  display: flex;
  flex-basis: 100%;
  font-size: 24px;
  padding: 20px;
  margin: 20px;
  flex-basis: 200px;
  width: 93%;
}
</style>