'use stict';

let booksBlock = document.querySelector('.books');
let books = document.querySelectorAll('.book');
booksBlock.insertAdjacentElement('afterbegin', books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
booksBlock.insertAdjacentElement('beforeend',books[2]);


document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";


let heading = books[4].querySelector('a');
heading.textContent='Книга 3. this и Прототипы Объектов';


let advertise = document.querySelector('.adv');
advertise.remove();


let chaptersBookNum2 = books[0].querySelectorAll('li');
chaptersBookNum2[3].after(chaptersBookNum2[6]);
chaptersBookNum2[6].after(chaptersBookNum2[8]);
chaptersBookNum2[10].before(chaptersBookNum2[2]);


let chaptersBookNum5 = books[5].querySelectorAll('li');
chaptersBookNum5[1].after(chaptersBookNum5[9]);
chaptersBookNum5[9].after(chaptersBookNum5[3]);
chaptersBookNum5[3].after(chaptersBookNum5[4]);
chaptersBookNum5[2].after(chaptersBookNum5[6]);
chaptersBookNum5[6].after(chaptersBookNum5[7]);


let chaptersBookNum6 = books[2].querySelectorAll('li');
let newChapter = document.createElement('li');
newChapter.textContent='Глава 8: За пределами ES6';
chaptersBookNum6[8].after(newChapter);
