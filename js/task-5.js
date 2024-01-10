/*
Напиши скрипт, який змінює колір фону елемента
 <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor().


*/ 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeButton = document.querySelector(".change-color");

changeButton.addEventListener('click', function() {
  // Call the getRandomHexColor 
  const randomColor = getRandomHexColor();

  // Use the random color 
  document.body.style.backgroundColor = randomColor;
});
