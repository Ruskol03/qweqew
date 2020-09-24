import "../../../selectal-develop/dist/selectal.min.scss"
import "../color&Type/colors";
import "../FormElements/form";
import './style.scss';
import "../../../selectal-develop/dist/selectal.min.js"
let Selectal = require("../../../selectal-develop/dist/selectal.min.js")
let mySelectal = new Selectal('#my-select');

export {mySelectal};