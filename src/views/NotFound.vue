<template>
  <div>
    <img
      src="https://cdn.pixabay.com/photo/2014/04/02/10/24/warning-303768_960_720.png"
      class="image"
    />
    <h2>DATA DOES NOT EXIST❕</h2>
    <router-link :to="{ name: 'home' }" class="back">Back to Home</router-link>
  </div>
</template>
<style scoped>
.image {
  width: 280px;
  height: 250px;
  margin: 50px;
}

h2 {
  color: white;
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
