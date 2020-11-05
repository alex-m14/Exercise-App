<template>
  <div class="container">
    <div class="card">
      <div class="column" style="text-align: left">
      <router-link class="button is-primary" to="/">Back</router-link>
      </div>
      <div class="row">
      <AddExercise/>
      </div>
    </div>
    <div class="card">
      <PersonalFeed/>
    </div>
  </div>
</template>

<script>
import AddExercise from "@/components/AddExercise";
import PersonalFeed from "@/components/PersonalFeed";

export default {
components:{
    AddExercise, PersonalFeed
  }
  
};
</script>

<style>
</style>