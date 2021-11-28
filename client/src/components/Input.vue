<template>
  <InputArray />
  <SelectAlgorithm />
  <div class="buttons">
    <Button text="Sort" @click="sort()" />
    <Button text="Clear" color="#2a9d8f" @click="clear()" />
  </div>
</template>

<script>
import SelectAlgorithm from "./Input/SelectAlgorithm";
import InputArray from "./Input/InputArray";
import Button from "./Button";
export default {
  components: {
    SelectAlgorithm,
    InputArray,
    Button,
  },
  setup() {
    const sort = () => {};
    const clear = () => {};
    return { sort, clear };
  },
};
</script>

<style>
.buttons {
  display: flex;
}
</style>