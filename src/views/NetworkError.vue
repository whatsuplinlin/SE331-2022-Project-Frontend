<template>
  <div class="networkError">
    <img
      src="https://static.thenounproject.com/png/207492-200.png"
      class="image"
    />
    <h2>NETWORK ERROR❕</h2>
    <br />
    <h4>Please check your internet connection</h4>
    <p><a href="#" @click="$router.go(-1)">Click Here To Try Again</a></p>
  </div>
</template>
<style scoped>
.image {
  width: 250px;
  height: 250px;
  margin: 50px;
}

h2 {
  color: white;
}

p {
  font-size: 18px;
}

.h4,
a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
