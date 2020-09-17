const toggleMenu = () => {
    const btMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    btMenu.addEventListener('click', () => {
        menu.classList.toggle('active-menu');
    });

    menu.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('close-btn') || target !== menu) {

            target = target.closest('.close-btn');

            menu.classList.toggle('active-menu');
        }
    });
};
export default toggleMenu;
