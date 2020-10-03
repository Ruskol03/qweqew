function stopDefAction(evt) {
    evt.preventDefault();
}
let funk =()=>{
  
    let optionBad =document.querySelectorAll(".optionBad");
    for(let i of optionBad){
        i.insertAdjacentHTML("beforeend","<div class='wrapSelectOption' ><button class='optionMines'>-</button><span class='optionNumberOf'></span><button class='optionPlus'>+</button></div>")

    }
 

    
  
        
}
setTimeout(()=>funk(),100)

let funkLoad = ()=>{
    let optionMines = document.querySelectorAll(".optionMines");
    
    for(let BtnMines of optionMines){
        let optionNumber =  BtnMines.nextSibling;
        optionNumber.textContent = 0;
    }
}
setTimeout(()=>funkLoad(),500)


let funkCheck = ()=>{
    let forBed = document.querySelector(".forBed");
    let selected = forBed.querySelector(".form__select__item");

    let bedrooms = forBed.querySelector("#Спальни");
    let bedroomsNum = bedrooms.querySelector(".optionNumberOf");
    let bed =  forBed.querySelector("#Кровати");
    
    let bedNum = bed.querySelector(".optionNumberOf");
    
    let bathrooms =  forBed.querySelector("#Ванныекомнаты");
    bathrooms.firstChild.textContent="Ванные комнаты"
   
    let bathroomsNum = bathrooms.querySelector(".optionNumberOf");
    
    selected.textContent=`${bedroomsNum.textContent} спальни, ${bedNum.textContent} кровати...  `
    
    let wrapSelectOptions =forBed.querySelectorAll(".wrapSelectOption")
    function stopDefAction(evt) {
        evt.preventDefault();
    }
    for(let oneSelect of wrapSelectOptions ){

       let btnPlus=oneSelect.lastElementChild;
       let btnMines = oneSelect.firstElementChild;
       let optionNumber = oneSelect.children[1];
      
       btnMines.addEventListener(
        'click', stopDefAction, false
        );
        btnPlus.addEventListener(
            'click', stopDefAction, false
        );
        btnMines.classList.add("btnMinesZero");


        btnMines.addEventListener("click",()=>{
            if(optionNumber.textContent>1){
           
                optionNumber.textContent=`${Number(optionNumber.textContent)-1}`
                selected.textContent=`${bedroomsNum.textContent} спальни, ${bedNum.textContent} кровати...`
            }else{
                optionNumber.textContent=`${Number(optionNumber.textContent)-1}`
                btnMines.classList.add("btnMinesZero");
                btnMines.disabled = "disabled";
                selected.textContent=`${bedroomsNum.textContent} спальни, ${bedNum.textContent} кровати...`

               
            }

        })
        btnPlus.addEventListener("click",()=>{
            optionNumber.textContent=`${Number(optionNumber.textContent)+1}`
            btnMines.style.display="inline-block";
            selected.textContent=`${bedroomsNum.textContent} спальни, ${bedNum.textContent} кровати...`
            btnMines.disabled = "";
            btnMines.classList.remove("btnMinesZero");
        })
    }
   
    let dropDown = document.querySelectorAll(".form__dropdown");
    for(let drop of dropDown){
        if(!drop.classList.contains("selectal-hidden")){
            drop.parentElement.style.borderColor="rgba(31, 32, 65, 0.05)"
        }
    }
}
setTimeout(()=>funkCheck(),1000);
    
   
    
    
    
       
       
            
            
            
               
                
                        
                
                
               
            
            
        
        
   
       
      
    
        
    