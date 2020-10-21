<template>
  <v-app>
    <v-app-bar
      app
      dark
    > <router-link to = "/" > Home </router-link> | 
      <router-link to = "/About" > About </router-link>

      <v-spacer></v-spacer>
      <v-card-title>
        <h1>Exercise App</h1>
      </v-card-title>
      
    </v-app-bar>    
    <router-view/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
