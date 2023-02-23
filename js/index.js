
// responsive code 

let menuNavbar = document.getElementById("icon");
let navBar = document.getElementById("navbarMenu");
menuNavbar.addEventListener("click",function(){
    navBar.classList.toggle("showMenu");  
})

// stickey code 

let stkMenu = document.querySelector("nav");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 100){
    stkMenu.classList.add("stickey")
    }else{
        stkMenu.classList.remove("stickey");
    }
}

let nav = document.querySelectorAll(".nabarMenu");
let menu = document.getElementById("navbarMenu");
nav.forEach(function(e){
    e.addEventListener("click",function(){
    menu.classList.remove("showMenu");
    })
})
// text typing code

var typingText = new Typed('.auto-text',{
    strings:["FrontEnd Developer", "WebDesginer", "React Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    satrtDelay:1000,
    backDelay:1500
})