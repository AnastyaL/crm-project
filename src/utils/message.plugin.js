import M from 'materialize-css';
// import Vue from 'vue';

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$message = (html) => {
      M.toast({ html });
    };

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$error = (html) => {
      M.toast({ html: `[Error]: ${html}` });
    };
  },
};
