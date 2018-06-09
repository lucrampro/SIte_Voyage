(function(){
    var navMenu = document.querySelector(".menu-navigation");
    var btnBurger = document.querySelector(".btn-navigation");

    
    
    
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
    
})();