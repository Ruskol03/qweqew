import "./form.scss"
import "../../../selectal-develop/dist/selectal.min.scss"
import "../../../selectal-develop/dist/selectal.min.js"
import "../FormElements/makedinput"
import "./rangeSlider"
import "../../../material-date-range-picker/dist/duDatepicker.min.js" 
import "../../../material-date-range-picker/dist/duDatepicker-theme.scss"
import "../../../material-date-range-picker/dist/duDatepicker.min.scss"  
import "../FormElements/paginator"
import "./dropDwonBad"
// import "../FormElements/paginator2.js"
let Selectal = require("../../../selectal-develop/dist/selectal.min.js")
let duDatepicker =require("../../../material-date-range-picker/dist/duDatepicker.min.js" )
let noUiSlider = require("../../../node_modules/nouislider/distribute/nouislider")
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
let selectF =()=>{
  let mySelectal2 = new Selectal('#my-select2');
}
setTimeout(()=>selectF(),10);







var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 1000,
        'max': 13000
    },
   
});

var nodes = [
  document.getElementById('lowerValue'), // 0
  document.getElementById('upperValue')  // 1
];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
slider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
 
  nodes[handle].innerHTML = Math.round(values[handle]/1000) ;

  let slider__span =document.getElementById("slider__span");
  slider__span.textContent = `${nodes[0].textContent} 000р - ${nodes[1].textContent} 000р`;
});



;
$(function() {
  $('#demo').pagination({
      items: 180,
      itemsOnPage: 12,
      cssStyle: 'light-theme',
      pages:15,

      displayedPages:3,
      edges:1,
      ellipsePageSet:false,
      
  })
 
})

let raginatorNavigate = document.querySelector("#paginatorNavigate");




let a = () =>{
    
  
  let current = document.querySelector(".current")
  if(Number(current.textContent)==1){
    raginatorNavigate.textContent = `${current.textContent} - ${Number(current.textContent) + 11} из 100+ вариантов аренды` ;
  }else{
    raginatorNavigate.textContent = `${Number(current.textContent)+(12 * (Number(current.textContent)-1)-1)} - ${Number(current.textContent)+(12 * (Number(current.textContent)-1)-1)+12} из 100+ вариантов аренды` ;
  }
  



}

setTimeout(setInterval(()=>a(),10),3000);





    