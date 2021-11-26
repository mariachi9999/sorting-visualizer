<template>
  <div class="header">
    <div class="logo">
      <img class="img" src="@/assets/Vector.png" />
      <h2 class="name">ALGORITHM VISUALIZER</h2>
    </div>
    <h2 class="about">ABOUT US</h2>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  background: #264653;
  padding: 20px 30px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name {
  color: #e9c46a;
}

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  max-height: 60px;
  padding-right: 20px;
}

.about {
  position: relative;
  align-items: right;
  color: #e9c46a;
}
/* .nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
} */
</style>