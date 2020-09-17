

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');


    const calcInput = () => {
        const calcBlock = document.getElementById('calc'),
            inputs = calcBlock.querySelectorAll('input');

        inputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[\D]/g, '');
            });
        });

    };
    calcInput();


    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;


        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);

        }

        animate({ duration: 300, //скорость воспроизведения анимации

            timing(timeFraction) {

                return timeFraction;//рассчёт времени
            },

            draw(progress) {

                totalValue.textContent = Math.floor(progress * total); //вывод на страницу
            }
        });
    };

    calcBlock.addEventListener('change', event => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {

            countSum();
        }
    });

    // функция запуска анимации
    function animate({ duration, draw, timing }) {

        const start = performance.now();//время в м.с. с момента загрузки страницы

        requestAnimationFrame(function animate(time) {

            let timeFraction = (time - start) / duration;

            if (timeFraction > 1) {
                timeFraction = 1;
            }
            const progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }

        });
    }
};
export default calc;
