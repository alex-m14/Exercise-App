<template>
  <div>
    <h1>YOUR EXERCISES</h1>
    <div class="level" style="text-align: left; padding: 20px" v-for= " (exercise_item,i) in exercise_items" :key="i" >
        <div class="level-item">
            <font-awesome-icon icon="trash" :style="{ color: '#c40013' }" @click="removeExercise(i)" />
        </div>
        <div class="level-item" >
            <h1> {{exercise_item.exercise_type}} </h1>
        </div>
        <div class="level-item">
          <h1> {{exercise_item.exercise_duration}} minutes</h1>
        </div>
        <div class="level-item">
          <input class="button is-primary"  value="Edit" >
        </div>
      </div>
  </div>
</template>

<script>
import {exercise_items} from "@/model/exerciseItems";

export default {
    data(){
         return {
            exercise_items
         }
    },
    methods:{
        removeExercise(i){
            // console.log ("index "+ i)
            this.exercise_items.splice(i , 1);
        }
    }  
};
</script>

<style>
</style>