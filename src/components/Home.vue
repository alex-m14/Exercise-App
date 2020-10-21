<template>
  <v-app>
    <v-card width="50%" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1"> Login or Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label = "Username"/>
            

          <v-text-field type="password" label="password"/>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'Home',
  components: {
    Home
  }
}
</script>
