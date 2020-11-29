// функция обработки нажатия на иконку меню
menu.onclick = function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += "  responsive";
        } else {
            x.className = "topnav";
        }
    }
    // функционал карусели на главном экране
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var i;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
// смена изображения кнопки "купить"

function imgChange(n) {
    document.getElementById(n).style.background = "blue";
    document.getElementById(n).style.border = "1px solid blue";
    document.getElementById(n).textContent = "Добавлено";
}

// реализация изменения количества товаров в корзине и подсчёта стоимости


function show_current_price(changes) {
    var price = parseInt(document.getElementById('sum').textContent) + changes;
    // console.log(price);
    document.getElementById('sum').innerHTML = price + " руб";
}

function basket_counter(toy_number, price_change, num_change) {
    document.getElementById(toy_number).innerHTML = parseInt(document.getElementById(toy_number).textContent) + num_change;
    document.getElementById(toy_number).parentNode.parentNode.childNodes[5].innerHTML = parseInt(document.getElementById(toy_number).parentElement.parentNode.childNodes[5].textContent) + price_change + ' руб'
    show_current_price(price_change);
    if (parseInt(document.getElementById(toy_number).textContent) == 0) {
        document.getElementById(toy_number).parentNode.parentNode.style.display = 'none';
    }
    var all_hidden_toys_counter = 0;
    for (var i = 0; i < document.getElementsByClassName('bought-toy').length; i++) {
        if (document.getElementsByClassName('bought-toy')[i].style.display == 'none') {
            all_hidden_toys_counter++;
        }
    }
    if (all_hidden_toys_counter == document.getElementsByClassName('bought-toy').length) {
        document.getElementById('message').style.display = 'block';
    }
    console.log(all_hidden_toys_counter);
}