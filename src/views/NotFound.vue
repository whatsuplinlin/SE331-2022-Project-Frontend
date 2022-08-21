<template>
  <div>
    <img
      src="https://www.vkf-renzel.com/out/pictures/generated/product/1/650_650_75/r12044336-01/general-warning-sign-10836-1.jpg"
      class="image"
    />
    <h2>DATA DOES NOT EXIST❗️</h2>
    <router-link :to="{ name: 'home' }" class="back">Back to Home</router-link>
  </div>
</template>
<style scoped>
.image {
  width: 250px;
  height: 250px;
  margin: 50px;
}

h2 {
  color: red;
}

.back {
  font-size: 20px;
  color: black;
  text-decoration: none;
}

.back:hover {
  text-decoration: underline;
}
</style>
