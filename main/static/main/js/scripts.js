function submenu_fnc() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("rotateFunc").classList.toggle("rotate");
  document.getElementById("backFunc").classList.toggle("show-back");
  document.getElementById("vk-circle").classList.toggle("show-circles");
  document.getElementById("tg-circle").classList.toggle("show-circles");
}


$(function() {
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });
});

const btn_menu_mobile = document.querySelector('.btn-menu-mobile');
if (btn_menu_mobile) {
  btn_menu_mobile.addEventListener('click', submenu_fnc);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("up-btn").style.bottom = "25px";
    } else {
        document.getElementById("up-btn").style.bottom = "-100px";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.getElementById("up-btn").addEventListener("click", topFunction);


function checkEmail(input) {
  var email = input.value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("Введите действительный email адрес");
  }
}




const toggle_rubriki = document.querySelector('.toggle-rubriki');
if (toggle_rubriki) {
  toggle_rubriki.addEventListener('click', submenu_fnc);
}


const buttons_sub_active = document.querySelectorAll('.cat-btn');
buttons_sub_active.forEach(button => {button.addEventListener('click', () => {
    buttons_sub_active.forEach(btn => btn.classList.remove('cat-btn-active'));
    button.classList.add('cat-btn-active');
});
});


var cat_buttons = document.querySelectorAll('button[id^="load-categories"]');
for (var ii = 0; ii < cat_buttons.length; ii++) {
  cat_buttons[ii].addEventListener('click', function() {
    var buttonId = this.id.replace('load-categories-', '');

    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/load-categories/' + buttonId + '/', true);

    xhr.send();

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Обновляем контент на странице

        document.getElementById('content_categories').innerHTML = xhr.responseText;

      }
    };
  });
}


window.addEventListener("load", function() {
  document.querySelector(".cat-btn-active").click();
});





//
// var buttons = document.querySelectorAll('button[id^="load-content"]');
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function() {
//     var buttonId = this.id.replace('load-content-', '');
//
//     var xhr1 = new XMLHttpRequest();
//     var xhr2 = new XMLHttpRequest();
//     var xhr3 = new XMLHttpRequest();
//
//     xhr1.open('GET', '/load-content-1/' + buttonId + '/', true);
//
//     xhr1.send();
//
//     xhr1.onreadystatechange = function() {
//       if (xhr1.readyState == 4 && xhr1.status == 200) {
//         // Обновляем контент на странице
//
//         document.getElementById('content-1').innerHTML = xhr1.responseText;
//
//       }
//     };
//
//
//     xhr2.open('GET', '/load-content-2/' + buttonId + '/', true);
//
//     xhr2.send();
//
//     xhr2.onreadystatechange = function() {
//       if (xhr2.readyState == 4 && xhr2.status == 200) {
//         // Обновляем контент на странице
//
//         document.getElementById('content-2').innerHTML = xhr2.responseText;
//
//       }
//     };
//
//
//     xhr3.open('GET', '/load-content-3/' + buttonId + '/', true);
//
//     xhr3.send();
//
//     xhr3.onreadystatechange = function() {
//       if (xhr3.readyState == 4 && xhr3.status == 200) {
//         // Обновляем контент на странице
//
//         document.getElementById('content-3').innerHTML = xhr3.responseText;
//
//       }
//     };
//
//   });
// }
//
// window.addEventListener("load", function() {
//   document.getElementById("load-content-last").click();
// });






const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (event) => {
  if (searchInput.value.trim() === '') {
    event.preventDefault();
    alert('Введите поисковый запрос');
  }
});



const buttons_active = document.querySelectorAll('.cat_btn');
buttons_active.forEach(button => {button.addEventListener('click', () => {
    buttons_active.forEach(btn => btn.classList.remove('is-selected'));
    button.classList.add('is-selected');
});
});


// Находим все элементы с определенным aria-label
const elements = document.querySelectorAll('[aria-label]');

// Добавляем обработчик события click к каждому элементу
elements.forEach(element => {
  element.addEventListener('click', () => {
    // Находим все элементы с тем же aria-label, что и нажатый элемент
    const sameLabelElements = document.querySelectorAll(`[aria-label="${element.getAttribute('aria-label')}"]`);
    // Вызываем функцию для каждого найденного элемента
    sameLabelElements.forEach(sameLabelElement => {
      sameLabelElement.click();
    });
  });
});


function relevance_link() {
  document.getElementById("relevance-link").click();
}
const rel_btn = document.getElementById("relevance-btn");
if (rel_btn) {
    rel_btn.addEventListener("click", relevance_link);
}

function chronology_link() {
  document.getElementById("chronology-link").click();
}
const chr_btn = document.getElementById("chronology-btn");
if (chr_btn) {
    chr_btn.addEventListener("click", chronology_link);
}
