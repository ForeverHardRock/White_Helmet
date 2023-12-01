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


window.addEventListener('load', function() {
  var catBtn = document.querySelector('.cat-btn-active');
  if (catBtn) {
    catBtn.click();
  }
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



function share_btn_fnc() {
  document.getElementById("field-bns-id").classList.toggle("show-btns");
}

const toggle_share = document.querySelector('.share-field-btn');
if (toggle_share) {
  toggle_share.addEventListener('click', share_btn_fnc);
}


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





const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (event) => {
  if (searchInput.value.trim() === '') {
    event.preventDefault();
    alert('Введите поисковый запрос');
  }
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


//
//
//
//
//
//




const buttons_active = document.querySelectorAll('.cat_btn');
buttons_active.forEach(button => {button.addEventListener('click', () => {
    buttons_active.forEach(btn => btn.classList.remove('is-selected'));
    button.classList.add('is-selected');
});
});



const catBtns = document.querySelectorAll('.cat_btn');

// Добавляем обработчик клика на каждую кнопку cat_btn
catBtns.forEach(catBtn => {
  catBtn.addEventListener('click', () => {
    // Получаем aria-label у кнопки cat_btn
    const ariaLabel = catBtn.getAttribute('aria-label');

    // Находим все кнопки dot с таким же aria-label внутри элемента с классом "cat-news"
    const dots = document.querySelectorAll('.cat-news [aria-label="' + ariaLabel + '"]');

    // Производим клик на найденных кнопках dot
    dots.forEach(dot => {
      dot.click();
    });
  });
});






// Находим все контейнеры с классом "puzzle-grid"
const puzzleGrids = document.querySelectorAll('.cat-puzzle-grid');

// Создаем объект для хранения контейнеров с классом "is-selected"
const selectedGrids = {};

// Создаем функцию для обработки изменений в DOM
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    // Проверяем, что изменения произошли внутри контейнера с классом "puzzle-grid"
    if (mutation.target.closest('.cat-puzzle-grid')) {
      // Получаем все контейнеры с классом "puzzle-grid"
      const puzzleGrids = document.querySelectorAll('.cat-puzzle-grid');

      // Проходимся по всем контейнерам с классом "puzzle-grid"
      puzzleGrids.forEach(grid => {
        // Проверяем, что контейнер уже был добавлен в объект "selectedGrids"
        if (selectedGrids[grid.id]) {
          // Если контейнер уже был добавлен, то проверяем, что он имеет класс "is-selected"
          if (grid.classList.contains('is-selected')) {
            // Если контейнер имеет класс "is-selected", то добавляем его в объект "selectedGrids"
            selectedGrids[grid.id] = grid;
          } else {
            // Если контейнер не имеет класс "is-selected", то удаляем его из объекта "selectedGrids"
            delete selectedGrids[grid.id];
          }
        } else {
          // Если контейнер еще не был добавлен в объект "selectedGrids", то проверяем, что он имеет класс "is-selected"
          if (grid.classList.contains('is-selected')) {
            // Если контейнер имеет класс "is-selected", то добавляем его в объект "selectedGrids"
            selectedGrids[grid.id] = grid;
          }
        }
      });

      // Проверяем, что в объекте "selectedGrids" есть хотя бы один контейнер с классом "is-selected"
      if (Object.keys(selectedGrids).length > 0) {
        // Если есть, то получаем первый контейнер с классом "is-selected" из объекта "selectedGrids"
        const selectedGrid = Object.values(selectedGrids)[0];

        // Получаем aria-label у контейнера с классом "is-selected"
        const selectedLabel = selectedGrid.getAttribute('aria-label');

        // Находим контейнер с классом "cat_btn" с таким же aria-label
        const targetBtn = document.querySelector(`.cat_btn[aria-label="${selectedLabel}"]`);

        // Добавляем класс "is-selected" к найденному контейнеру
        if (targetBtn) {
          const catBtns = document.querySelectorAll('.cat_btn');
          catBtns.forEach(btn => {
            if (btn === targetBtn) {
              btn.classList.add('is-selected');
            } else {
              btn.classList.remove('is-selected');
            }
          });
        }
      }
    }
  });
});

// Настраиваем объект для отслеживания изменений в DOM
const config = { attributes: true, childList: true, subtree: true };

// Запускаем отслеживание изменений в DOM
observer.observe(document.body, config);
