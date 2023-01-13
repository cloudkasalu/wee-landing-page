

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

document.addEventListener("click", function(e){
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return //if is inside of a dropdown menu click then ignore

  let currentDropdown   // else if click is on dropdown button then add active class to currentDropdown button menu
  if(isDropdownButton){
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle('active')

  }

 document.querySelectorAll("[data-dropdown].active").forEach(dropdown=>{   // remove active class to all active dropdowns except the currentdropdown
  if(dropdown === currentDropdown){
    return
  }else{
    dropdown.classList.remove('active')
  }
 })

})