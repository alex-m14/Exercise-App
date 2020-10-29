<template>
  <div>
    <div class="tabs">
      <ul>
        <li class="tablinks is-active" @click="openTab(event, 'Login')">
          <a>Login</a>
        </li>
        <li class="tablinksc  " @click="openTab(event, 'Register')"><a>Register</a></li>
      </ul>
    </div>
    <div id="Login" class="tabcontent">
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

    <div id="Register" class="tabcontent">
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
  methods: {
    openTab(event, tabId) {
      var tabcontent = document.getElementsByClassName('tabcontent');
      for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }

      var tablinks = document.getElementsByClassName('tablinks');
      for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' is-active', '');
      }

      document.getElementById(tabId).style.display = 'block';
      event.currentTarget.className += ' is-active';
    }
  }
};
</script>

<style>
.tabcontent{
    display: none;

}
#Login{
    display: block;
}
</style>