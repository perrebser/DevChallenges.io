const menu_toggle = document.getElementById('cosas');
const menu_exit =  document.getElementById("close-btn");
const primary_menu = document.getElementById("primary-navigation");

menu_toggle.addEventListener("click", () => {
    const visibility = primary_menu.getAttribute('data-visible');
    console.log(visibility);



})
