exports.install = function(Vue) {
  Vue.directive("focus", {
    inserted(el, binding) {
      if (!binding.value) {
        return;
      }
      console.log(binding);
      console.log("komponenta se inicijalizovala");
      el.focus();
    },
    update(el, binding) {
      if (!binding.value) {
        return;
      }
      console.log(binding);
      el.focus();
    }
  });
};
