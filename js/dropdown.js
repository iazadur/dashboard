
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




