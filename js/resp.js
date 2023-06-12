burger = document.querySelector('.burger')
menu = document.querySelector('.menu')
profile = document.querySelector('.profile')

burger.addEventListener('click', ()=>{
    menu.classList.toggle('h-nav');
    profile.classList.toggle('v-nav');

})