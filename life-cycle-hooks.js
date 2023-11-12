var APP_LOG_LIFECYCLE_EVENTS = true

var webstore = new Vue({
  el: "#app",
  data: {
    sitename: "Vue.js Pet Depot",
    product: {
      id: 1001,
      title: "Cat Food, 25lb bag",
      description: "A 25 pound bag of <em>irresisteble</em>, organic goodness for your cat.",
      price: 2000,
      image: "assets/images/product-fullsize.png"
    }
  },
  beforeCreate: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeCreate")
    }
  },
  created: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("created")
    }
  },
  beforeMount: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeMount")
    }
  },
  mounted: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("mounted")
    }
  },
  beforeUpdate: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeUpdate")
    }
  },
  updated: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("updated")
    }
  },
  beforeDestroy: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeDestroy")
    }
  },
  destroyed: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("destroyed")
    }
  }
})
