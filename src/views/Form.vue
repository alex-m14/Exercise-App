<template>
  <div class="container">
    <div class="card">
      <div class="level" style="text-align: left; padding: 20px">
        <div class="level-item">
          <router-link class="button is-primary" to="/">Back</router-link>
        </div>
        <div class="level-item">
          <div class="select">
            <select>
              <option>Select exercise</option>
              <option>Walking</option>
              <option>Running</option>
              <option>Cycling</option>
              <option>Enter Other</option>
            </select>
          </div>
        </div>
        <div class="level-item">
          <h1>Time  : </h1>
          <div class="field">
            <div class="control">
              <input class="input" type="Time" placeholder="Text input" />
            </div>
          </div>
        </div>
        <div class="level-item">
          <input class="button is-primary" type="submit" value="Add">
        </div>
      </div>
    </div>
    <div class="card">
      <h1>Past Exercises</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>