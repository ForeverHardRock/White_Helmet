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



const buttons = document.querySelectorAll('button[id^="load-content"]');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let buttonId = this.id.replace('load-content-', '');

        fetch(`/load-content/${buttonId}/`)
            .then(res => {
                console.log('res', res.json());
                // document.getElementById('content-1').innerHTML = res.text();
                // return res.json();
            })
            // .then(json => {
            //     console.log('json', json);
            // })
    });
}


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
//         // document.getElementById('content').innerHTML = xhr.responseText;
//         document.getElementById('content-1').innerHTML = xhr.responseText;
//         document.getElementById('content-2').innerHTML = xhr.responseText;
//         document.getElementById('content-3').innerHTML = xhr.responseText;
//
//       }
//     };
//   });
// }







const buttons_active = document.querySelectorAll('.cat_btn');
buttons_active.forEach(button => {button.addEventListener('click', () => {
    buttons_active.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
});
});


