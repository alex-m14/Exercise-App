<template>
<nav class="navbar is-success max-width" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <i class="fas fa-heartbeat is-large "></i>
    </a>

    <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbar">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbar" class="navbar-menu" :class="{ 'is-active': isActive }">
    <div class="navbar-start">
        <router-link class= "navbar-item" to = "/"> Home </router-link> 
        <router-link class= "navbar-item" to = "/About" > About </router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link class="button is-primary" to= "/Login">
            <strong>Register/Login</strong>
          </router-link>
          <router-link class="button is-light" to="/AdminPage">
            Admin
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data: ()=>({
    isActive:false
  })
}
</script>

<style>

</style>