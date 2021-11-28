<template>
  <input
    v-model="arrayNumbers"
    placeholder="Input an array to sort!"
    type="text"
    @keyup.space="addToArray()"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["array"],
  name: "InputArray",
  setup() {
    let arrayToSort = [];
    let count = 0;
    const arrayNumbers = ref('');
    const addToArray = () => {
      console.log(arrayNumbers.value + " list");

      arrayToSort[count] = arrayNumbers.pop();
      count++;
      console.log(arrayToSort);
    };

    return { addToArray, arrayToSort };
  },

  //   setup() {
  //     const arrayNumbers = ref("");
  //     const inputToArray = () => {
  //         const  inArray = arrayNumbers.reduce(() => {

  //         })
  //         return inArray
  //     }
  //     inputToArray()
  //   },
};
</script>

<style scoped>
</style>