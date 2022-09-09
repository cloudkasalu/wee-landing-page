

const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('#navbarNav');


navbarToggler.addEventListener('click', (e)=>{

    const value = navbarToggler.getAttribute('aria-expanded')

    if(value === 'false'){
      navbar.classList.add('navbar-show');
      navbarToggler.setAttribute('aria-expanded', "true");


    } else if (value === 'true'){
      navbar.classList.remove('navbar-show');
      navbarToggler.setAttribute('aria-expanded', "false");
    }
       

})