<template>
  <div id="app" class="container">
    <!-- <h1>prvi input sa focus directive</h1>
    <single-input-component></single-input-component> -->
    <h1>dva inputa sa focus directive</h1>
    <two-inputs-component v-if="isValid"></two-inputs-component>
    <!-- <button @click="validateFields">Click me</button> -->
    <button @click="isValid = !isValid">Click me</button>
    <my-buttons-component></my-buttons-component>
  </div>
</template>

<script>
import SingleInputComponent from "./components/SingleInputComponent.vue";
import TwoInputsComponent from "./components/TwoInputsComponent.vue";
import MyButtonsComponent from "./components/MyButtonsComponent";

export default {
  name: "app",
  data() {
    return {
      isValid: true
    };
  },
  components: {
    SingleInputComponent,
    TwoInputsComponent,
    MyButtonsComponent
  },
  methods: {
    // validateFields() {
    //   this.isValid = !this.isValid;
    // }
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
