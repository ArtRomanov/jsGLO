const togglePopup = () => {

    const   popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpContent = document.querySelector('.popup-content');
    let count = 0;

    popupBtn.forEach(elem => {
        elem.addEventListener('click', function moveLeft() {
            count++;
            popup.style.display = 'block';

            if (document.documentElement.clientWidth > 768) {

                popUpContent.style.left = count * 4 + 'px';

                if (count < 142.5) {

                    setTimeout(moveLeft, 5);

                }
            }
        });
    });

    popup.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popUpContent.style = 'none';
            popup.style.display = 'none';

            count = 0;
        } else {
            console.log(target);
            target = target.closest('.popup-content');

            if (!target) {
                popUpContent.style = 'none';
                popup.style.display = 'none';


                count = 0;
            }
        }
    });
};
export default togglePopup;
