(function(){
    var navMenu = document.querySelector(".menu-navigation");
    var btnBurger = document.querySelector(".btn-navigation");
var lien = document.querySelector("a");
    
    
    
//    MENU BURGER
    
    btnBurger.addEventListener("click", function() {
      if( navMenu.classList.contains("isOpen")){
          
          navMenu.classList.remove("isOpen");
      }
        
        else{
         
            navMenu.classList.add("isOpen");
            
        }
    })
    
//    MENU BURGER
    
lien.addEventListener("click", function(){
    
 navMenu.classList.remove("isOpen");   
    
})
    
    
})();