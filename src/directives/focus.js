exports.install = function(Vue) {
  Vue.directive("focus", {
    inserted(el, binding, vnode) {
      console.log(vnode);
      if (!binding.value) {
        return;
      }

      el.focus();
    },
    componentUpdate(el, binding) {
      if (!binding.value) {
        return;
      }

      el.focus();
    },
    unbind(el, binding) {
      console.log(el);
    }
  });
};
