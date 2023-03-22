const email = document.querySelector('[type="email"');
const password = document.querySelector('[type="password');
const btn = document.querySelector('.submit');
const mistake = document.querySelector(".mistake");

btn.addEventListener('click', (event) => { 
    event.preventDefault();
    if(!email.value || typeof(email.value) !== "string") {
        mistake.classList.add('active'); 
    } else if (!password.value || typeof(password.value) !== "string") {
        mistake.classList.add('active');
    }
    else {
        document.location="index.html";
        alert("Вы вошли в аккаунт");
    }
});


