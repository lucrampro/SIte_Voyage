var btnBurgeur = document.getElementsByClassName("btn-navigation");
var navigationMenu = document.getElementsByClassName("menu-navigation")

function(){
    
    btnBurgeur.click(function(){
        
        navigationMenu.toggleClass("isOpen")
        
    };
    
};