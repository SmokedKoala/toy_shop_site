// функция обработки нажатия на иконку меню
menu.onclick = function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "  responsive";
    } else {
        x.className = "topnav";
    }
}