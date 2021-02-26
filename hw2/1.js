/*

  Задание 1.

  Написать скрипт который будет будет переключать вкладки по нажатию
  на кнопки в хедере.

  Главное условие - изменять файл HTML нельзя.

  Алгоритм:
    1. Выбрать каждую кнопку в шапке
       + бонус выбрать одним селектором

    2. Повесить кнопку онклик
        button1.onclick = function(event) {

        }
        + бонус: один обработчик на все три кнопки

    3. Написать функцию которая выбирает соответствующую вкладку
       и добавляет к ней класс active

    4. Написать функцию hideAllTabs которая прячет все вкладки.
       Удаляя класс active со всех вкладок

  Методы для работы:

    getElementById
    querySelector
    classList
    classList.add
    forEach
    onclick

    element.onclick = function(event) {
      // do stuff ...
    }

*/


var btns = document.querySelectorAll('.showButton');
var tabs = document.querySelectorAll('.tab');

btns.forEach(e => {
  e.addEventListener('click', changeTab)
});

function changeTab() {
  let btnAttribute = this.getAttribute("data-tab");
  console.log(btnAttribute);
  for (i = 0; i < tabs.length; i++) {
    tabs[btnAttribute - 1].classList.toggle("active");
  }
  hideAllTabs();
}

function hideAllTabs() {
  let activeTags = document.querySelectorAll(".active");
  activeTags.classList.remove(".active");
};