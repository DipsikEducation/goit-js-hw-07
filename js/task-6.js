/*
input, у який користувач вводить бажану кількість елементів. 
Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. 
При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
Після натискання на кнопку Destroy колекція елементів має очищатися.



-----------------------------------------------------------------------------------------------------------------
Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число,
 що зберігає кількість елементів для рендеру. 
Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

- Розміри першого <div> елемента мають бути 30px на 30px.
- Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
- Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
*/ 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

/*Сall to classes*/ 

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

/*Create eventlistener into button */

function createBoxes() {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  /*Validate amount*/

  const boxes = Array.from({ length: amount }, (_, index) => {
    const box = document.createElement('div');
    box.style.width = `${30 + index * 10}px`;
    box.style.height = `${30 + index * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  boxesContainer.append(...boxes);
}
/*Creates elements */

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

/*Destroy Elements*/ 