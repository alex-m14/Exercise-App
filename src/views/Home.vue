<template>
  <div class="container">
    <div class="row">
      <h1 style="font-size: 35px">Welcome to the Exercise App</h1>
    </div>
    <div class="row">
      <p style="font-size: 20px">
        Register or login to enter your workout today!!<br />
      </p>
    </div>
    <div class="row">
      <router-link class="button is-primary" to="/Form"
        >Add Exercise</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  methods: {},
};
</script>
<style >
.container{
    text-align:center;
}
.row{
    padding: 10px;
    display: flex;
}
</style>