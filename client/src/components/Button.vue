<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style scoped>
.btn {
  background: var(--header);
  color: whitesmoke;
  border: none;
  padding: 30px ;
  margin: 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  font-family: inherit;
  display: flex;
  justify-content: space-around;
  flex-basis: 100%;
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}

</style>