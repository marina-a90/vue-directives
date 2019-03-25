<template>
    <div>
        <button :style="{ 'background-color': buttonColor }" @click="generateButton">Generate random color</button>
    </div>
</template>

<script>
import {GradientGenerator} from "../helpers/GradientGenerator";

export default {
  name: "MyButtonsComponent",
  data() {
    return {
      buttonColor: ''
    }
  },
  methods: {
    generateButton() {
      this.buttonColor = GradientGenerator.generateColorHex();
    }
  }
};
</script>

<style scoped>
</style>
