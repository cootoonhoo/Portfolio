const navbar = document.getElementById("navbar");
const TopNav = navbar.offsetTop +50;

window.onscroll = () =>{
    FixedInTop();
}

function FixedInTop(){
    if(window.pageYOffset >= TopNav){
        navbar.classList.add("fixedOnTop");
    }
    else{
        navbar.classList.remove("fixedOnTop");
    }
}