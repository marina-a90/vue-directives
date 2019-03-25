class GradientGenerator {
  generateColorHex() {
    return '#' + ('000000' + Math.random().toString(16).slice(2, 8)).slice(-6);
  };
  generate10Colors() {
    let colorList = [];
    for (let i = 0; i<10; i++) {
      colorList.push(this.generateColorHex());
    }
    return colorList;
  }
}

let gradientGenerator = new GradientGenerator();

export { gradientGenerator as GradientGenerator };
