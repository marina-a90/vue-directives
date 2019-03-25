class GradientGenerator {
  generateColorHex() {
    return '#' + ('000000' + Math.random().toString(16).slice(2, 8)).slice(-6);
  }
}

let gradientGenerator = new GradientGenerator();

export { gradientGenerator as GradientGenerator };
