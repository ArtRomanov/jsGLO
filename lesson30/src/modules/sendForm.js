const sendForm = () => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    forms(document.getElementById('form1'));
    forms(document.getElementById('form2'));
    forms(document.getElementById('form3'));

    const statusMessage = document.createElement('div');
    const preloadAnimation = document.createElement('div');


    statusMessage.style.cssText = 'font-size: 2rem; color: white;';

    //Функция для всех форм, по item вешается обработчик событий на каждую из них
    function forms(item) {

        const inputsArr = [...item.elements].filter(item => item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button');

        //Валидация инпутов
        inputsArr.forEach(item => {
            item.addEventListener('input', () => {

                if (item.name === 'user_phone') {

                    item.value = item.value.replace(/[^0-9+]/, '');

                } else if (item.name === 'user_name') {

                    item.value = item.value.replace(/[^а-яё ]/gi, '');

                } else if (item.name === 'user_message') {

                    item.value = item.value.replace(/[^а-яё0-9.,;:!?@#/$№\-)(=`<>|}{}+\]["'_*&^ ]/gi, '');

                } else if (item.name === 'user_email') {

                    item.value = item.value.replace(/[^a-z0-9.@_]/gi, '');

                }
            });
        });
        const postData = body => fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });


        item.addEventListener('submit', event => {
            event.preventDefault();
            item.append(statusMessage);
            item.append(preloadAnimation);

            preloadAnimation.classList.add('spinner-grow', 'text-light');
            statusMessage.textContent = loadMessage;

            const formData = new FormData(item);
            const body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    preloadAnimation.classList.remove('spinner-grow');
                    statusMessage.textContent = successMessage;
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            inputsArr.forEach(item => {
                item.value = '';
            });
        });
    }

};
export default sendForm;
