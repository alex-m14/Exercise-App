<template>
  <div>
    <div class="tabs">
      <ul>
        <li class="tablinks" @click="currentTab='Login'" :class="{'is-active':currentTab=='Login'}">
          <a>Login</a>
        </li>
        <li class="tablinksc  " @click="currentTab='Register'" :class="{'is-active':currentTab=='Register'}"><a>Register</a></li>
      </ul>
    </div>
    <div id="Login" class="tabcontent" :class="{block:currentTab=='Login'}">
      <div class="field">
        <label class="label"> Username</label>
        <div class="control">
          <input class="input" type="username" placeholder="Username" />
        </div>
        <div class="field">
          <label class="label"> Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <button class="button">Login</button>
    </div>

    <div id="Register" class="tabcontent" :class="{block:currentTab=='Register'}">
      <div class="field">
        <label class="label"> Username</label>
        <div class="control">
          <input class="input" type="username" placeholder="Username" />
        </div>
        <div class="field">
          <label class="label"> Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="email" />
          </div>
        </div>
        <div class="field">
          <label class="label"> Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <button class="button">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data:() => ({
    currentTab: 'Login'
  }),
  methods: {
    
  }
};
</script>

<style type='scss'>
.tabcontent{
    display: none;
    
}
.block{
  display: block;
}
</style>