exports.install = function(Vue) {
  Vue.directive("focus", {
    inserted(el) {
      el.focus();
    },
    update(el) {
      el.focus();
    }
  });
};
