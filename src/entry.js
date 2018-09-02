import Animal from "./class.js";
import "./style.scss"
import Test from "./test.vue"
import Vue from "vue";

const tiger = new Animal('tama', 'ねこ', 'nya-n');
const tgt = document.getElementById('tgt');
// tiger.check();
tgt.innerHTML = tiger.check();

new Vue({
  el: "#test",
  template: '<test/>',
  components: {
    Test
  }
});
