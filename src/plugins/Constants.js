let Constants = {
    install(Vue) {
      Vue.prototype.$constants = {
        VERSION: "1.0.0",
        DEBUG: true,
        POINT_NAME_LENGTH: 14,
      };
    }
  };
  
  export default Constants;