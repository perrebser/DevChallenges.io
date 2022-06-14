const menu_toggle = document.getElementById('menu-icon');
const menu_exit =  document.getElementById("close-btn");
const primary_menu = document.getElementById("primary-navigation");

menu_toggle.addEventListener("click", () => {
    const visibility = primary_menu.getAttribute('data-visible');
    if (visibility =="false") {
       primary_menu.setAttribute('data-visible',"true");
       menu_exit.setAttribute('data-visible',"true");
       console.log(visibility);
    } else {
        primary_menu.setAttribute('data-visible',"false");
        menu_exit.setAttribute('data-visible',"false");
    }
})

menu_exit.addEventListener("click", () =>  {
    const visibility = menu_exit.getAttribute('data-visible');
    if (visibility=="true") {
        primary_menu.setAttribute('data-visible',"false");
        menu_exit.setAttribute('data-visible',"false");
    }
})
