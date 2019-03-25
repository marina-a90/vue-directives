<template>
    <div>
        <!-- <button :style="{ 'background-color': buttonColor }" @click="generateButton">Generate random color</button> -->
        <button :style="{ backgroundColor: buttonColor }" @click="generateButton">Generate random color</button>
        <button @click="generate10Colors">List 10 random colors</button>
        <div v-for="(color, index) in colorsDiv" :key="index" :style="{ backgroundColor: color }">{{ color }}</div>
    </div>
</template>

<script>
import {GradientGenerator} from "../helpers/GradientGenerator";

export default {
  name: "MyButtonsComponent",
  data() {
    return {
      buttonColor: '', 
      colorsDiv: []
    }
  },
  methods: {
    generateButton() {
      this.buttonColor = GradientGenerator.generateColorHex();
    }, 
    generate10Colors() {
      console.log(this.colorsDiv);
      this.colorsDiv = GradientGenerator.generate10Colors();
      console.log(this.colorsDiv);
    }
  }
};
</script>

<style scoped>
</style>
