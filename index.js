const humburger = document.querySelector('.humburger');
const navList = document.querySelector('.nav_list');


humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    navList.classList.toggle('active');
});
document.querySelectorAll('.nav_link').forEach((n) =>{
    n.addEventListener('click', () => {
        humburger.classList.remove('active');
        navList.classList.remove('active');
    })
});