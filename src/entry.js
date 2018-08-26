import Animal from "./class.js";
import "./style.scss"

const tiger = new Animal('tama', 'ねこ', 'nya-n');
const tgt = document.getElementById('tgt');
// tiger.check();
tgt.innerHTML = tiger.check();

