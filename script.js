const botonMenu = document.getElementById('btn-menu');
const menuEnlaces = document.getElementById('menu-enlaces');

botonMenu.addEventListener('click', function () {
        menuEnlaces.classList.toggle('menu-activo');
})