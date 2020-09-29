import "./form.scss"
import "../../../selectal-develop/dist/selectal.min.scss"
import "../../../selectal-develop/dist/selectal.min.js"
import "../FormElements/makedinput"
import "./rangeSlider"
import "../../../material-date-range-picker/dist/duDatepicker.min.js" 
import "../../../material-date-range-picker/dist/duDatepicker-theme.scss"
import "../../../material-date-range-picker/dist/duDatepicker.min.scss"  
let Selectal = require("../../../selectal-develop/dist/selectal.min.js")
let duDatepicker =require("../../../material-date-range-picker/dist/duDatepicker.min.js" )
duDatepicker('#daterange',{
    inline: true, 
   range:true,
   format:'dd/mm/yyyy',
   fromTarget:'#rangeFrom',
 
   toTarget:'#rangeTo',
   
 
 });
  let log = document.getElementById("range");
 let ranges = document.getElementById("daterange");
 ranges.addEventListener("change",()=>{
   
   let dates = ranges.value.split("-");
   
   

   let  dateFrom = dates[0];
   let dateTo = dates[1];
   
   dateFrom = dateFrom.split('/');
   dateTo = dateTo.split("/");

   let resultFrom = new Date(dateFrom[2], dateFrom[1] - 1, dateFrom[0]); 
   let resultTo = new Date(dateTo[2], dateTo[1] - 1, dateTo[0]); 
   let moths = ["янв","фев","март","апр","май","июня","июля","авг","сен","окт","ноя","дек"];
   let wordMothFrom = moths[Number(resultFrom.getMonth())-1];
   let wordMothTo = moths[Number(resultTo.getMonth())-1];
   
   let result = `${resultFrom.getDate()} ${wordMothFrom} - ${resultTo.getDate()} ${wordMothTo}`
   
   log.value = result;

   
 })

 $('.form__masked').mask('99.99.9999');

 
 let arrowFrom = document.querySelector(".form__arrow_date");
 let arrowTo = document.querySelectorAll(".form__arrow_date")[1];
 arrowFrom.addEventListener("click",()=>{
   arrowFrom.classList.toggle("form__arrow_date_up")
   rangeFrom.click();
   

 })
 arrowTo.addEventListener("click",()=>{
   arrowTo.classList.toggle("form__arrow_date_up")
   rangeTo.click();
   

 })
let mySelectal = new Selectal('#my-select');


