import Animal from "./js/class.js";
import "./scss/style.scss"
import Test from "./components/test.vue"
import Vue from "vue";

const tiger = new Animal('tama', 'ねこ', 'nya-n');
const tgt = document.getElementById('tgt');
tgt.innerHTML = tiger.check();

new Vue({
  el: "#test",
  template: '<test/>',
  components: {
    Test
  }
});
