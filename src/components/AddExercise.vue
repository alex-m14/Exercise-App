<template>
  <div class="container">
      <div class="level" style="text-align: left; padding: 20px">
        <div class="level-item" >
          <div class="select" >
            <select v-model="exercise_items.exercise_type">
              <option>Select exercise</option>
              <option>Walking</option>
              <option>Running</option>
              <option>Cycling</option>
              <option>Enter Other</option>
            </select>
          </div>
        </div>
        <div class="level-item">
          <h1>Duration  : </h1>
          <div class="field">
            <div class="control">
              <input class="input" type="number" placeholder="minutes" v-model="exercise_items.exercise_duration" />
            </div>
          </div>
        </div>
        <div class="level-item">
          <input class="button is-primary" type="submit" value="Add" @click="addExercise" >
        </div>
      </div>
  </div>
</template>

<script>
import {exercise_items} from "@/model/exerciseItems"
export default {
    data(){
        return {
            exercise_items
        }
    },
    methods:{
        addExercise(){
            this.exercise_items.push({
                exercise_type:exercise_items.exercise_type,
                exercise_duration:exercise_items.exercise_duration
            })
        }
    }
}
</script>

<style>

</style>