<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <div class="title">
    <h1>🏥 COVID-19 VACCINATION 💉</h1>
  </div>
  <router-view />
</template>
<script>
export default {
  inject: ['GStore']
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@keyframes fade {
  from {
    background: #f9ffc2;
  }

  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: fade;
  animation-duration: 5s;
}
</style>
