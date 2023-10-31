function submenu_fnc() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("rotateFunc").classList.toggle("rotate");
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



function checkEmail(input) {
  var email = input.value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("Введите действительный email адрес");
  }
}

window.addEventListener("load", function() {
  document.getElementById("load-content-last").click();
});



// const buttons = document.querySelectorAll('button[id^="load-content"]');
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         let buttonId = this.id.replace('load-content-', '');
//
//         fetch(`/load-content/${buttonId}/`)
//             .then(res => {
//                 console.log('res', res.json());
//                 // document.getElementById('content-1').innerHTML = res.text();
//                 // return res.json();
//             })
//             // .then(json => {
//             //     console.log('json', json);
//             // })
//     });
// }


// var buttons = document.querySelectorAll('button[id^="load-content"]');
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function() {
//     var buttonId = this.id.replace('load-content-', '');
//
//     var xhr = new XMLHttpRequest();
//
//     xhr.open('GET', '/load-content/' + buttonId + '/', true);
//     xhr.send();
//
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         // Обновляем контент на странице
//
//         document.getElementById('content').innerHTML = xhr.responseText;
//
//       }
//     };
//   });
// }

// const buttons = document.querySelectorAll('button[id^="load-content"]');
// buttons.forEach(button => { button.addEventListener('click', () => { const buttonId = button.id.replace('load-content-', '');
//     const xhr1 = new XMLHttpRequest();
//     const xhr2 = new XMLHttpRequest();
//     const xhr3 = new XMLHttpRequest();
//     xhr1.open('GET', `/load-content-1/${buttonId}/`);
//     xhr2.open('GET', `/load-content-2/${buttonId}/`);
//     xhr3.open('GET', `/load-content-3/${buttonId}/`);
//     Promise.all([xhr1, xhr2, xhr3]).then(responses => { responses.forEach(response => { if (response.status === 200) { const contentId = response.target.id.replace('load-content-', '');
//         document.getElementById(`content-${contentId}`).innerHTML = response.target.responseText; } }); }); }); });


var buttons = document.querySelectorAll('button[id^="load-content"]');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var buttonId = this.id.replace('load-content-', '');

    var xhr1 = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();
    var xhr3 = new XMLHttpRequest();

    xhr1.open('GET', '/load-content-1/' + buttonId + '/', true);

    xhr1.send();

    xhr1.onreadystatechange = function() {
      if (xhr1.readyState == 4 && xhr1.status == 200) {
        // Обновляем контент на странице

        document.getElementById('content-1').innerHTML = xhr1.responseText;

      }
    };


    xhr2.open('GET', '/load-content-2/' + buttonId + '/', true);

    xhr2.send();

    xhr2.onreadystatechange = function() {
      if (xhr2.readyState == 4 && xhr2.status == 200) {
        // Обновляем контент на странице

        document.getElementById('content-2').innerHTML = xhr2.responseText;

      }
    };


    xhr3.open('GET', '/load-content-3/' + buttonId + '/', true);

    xhr3.send();

    xhr3.onreadystatechange = function() {
      if (xhr3.readyState == 4 && xhr3.status == 200) {
        // Обновляем контент на странице

        document.getElementById('content-3').innerHTML = xhr3.responseText;

      }
    };

  });
}




const buttons_active = document.querySelectorAll('.cat_btn');
buttons_active.forEach(button => {button.addEventListener('click', () => {
    buttons_active.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
});
});


