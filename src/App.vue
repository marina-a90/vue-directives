<template>
  <div id="app" class="container">
    <!-- <h1>prvi input sa focus directive</h1>
    <single-input-component></single-input-component> -->
    <h1>dva inputa sa focus directive</h1>
    <two-inputs-component></two-inputs-component>
  </div>
</template>

<script>
import SingleInputComponent from "./components/SingleInputComponent.vue";
import TwoInputsComponent from "./components/TwoInputsComponent.vue";

export default {
  name: "app",
  components: {
    SingleInputComponent,
    TwoInputsComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
