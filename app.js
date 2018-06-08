(function(){
    var navMenu = document.querySelector(".menu-navigation");
    var btnBurger = document.querySelector(".btn-navigation");
    console.log(btnBurger);
    
    btnBurger.addEventListener('click', function() {
      if( navMenu.classList.contains("isOpen")){
          
          navMenu.classList.remove("isOpen");
      }
        
        else if(
         
            navMenu.classList.add("isOpen");
            
        )
    })
    
})();