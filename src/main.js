import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from "firebase"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// Make BootstrapVue available throughout your project
Vue.config.productionTip = false;
Vue.use(BootstrapVue)

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDFn4e4332ZB8LJTskdSlcZ-tqqW-HKMdY",
    authDomain: "vue10-4f37e.firebaseapp.com",
    projectId: "vue10-4f37e",
    storageBucket: "vue10-4f37e.appspot.com",
    messagingSenderId: "605872402866",
    appId: "1:605872402866:web:76016ca75524dfba60b4ab",
    measurementId: "G-X88FJNW20L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");