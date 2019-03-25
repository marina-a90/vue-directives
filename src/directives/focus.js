exports.install = function(Vue) {
  Vue.directive("focus", {
    inserted(el) {
      console.log("komponenta se inicijalizovala");
      el.focus();
    },
    update(el) {
      el.focus();
    }
  });
};
