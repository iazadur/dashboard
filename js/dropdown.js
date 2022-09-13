
// Header Dropdown 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Asidebar Menu according 
let acc = document.querySelector(".sub_menu");
let svg = document.querySelector(".svg");
function according() {
    if (acc.style.display === "block") {
        acc.style.display = "none";
        svg.style.transform= "rotate(180deg)";
    } else {
        svg.style.transform= "rotate(0deg)";
        acc.style.display = "block";
    }
}




function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(0px)";
    document.getElementById("openNav").style.display = "none";
    document.getElementById("closeNav").style.display = "flex";
}

function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(-275px)";
    document.getElementById("openNav").style.display = "flex";
    document.getElementById("closeNav").style.display = "none";
  }