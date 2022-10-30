<template>
  <div v-if="GStore.user">
    <div id="navbar">
      <div class="row">
        <div class="col-6">
          <router-link :to="{ name: 'ChangeRole' }">Change Role To Patient</router-link>
        </div>
        <div class="col-6">
          <router-link :to="{ name: 'ChangeRoleToDoctor' }">Change Role To Doctor</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
<style scoped>
#navbar {
  background: #161240;
  padding: 10px;
}

#navbar a {
  color: #eff9fe;
}

#border {
  border-left: solid white 1px;
}
</style>
