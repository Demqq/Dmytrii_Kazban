/*
        Задание 0:

        - Вывести ОДИН лог в котором будет идентефикатор 'Combined log:' и массив Table
        - Вывести в консоль табличку из массива который находится в переменной Table
        - Вывести сообщение с ошибкой "Oops! Something gonna wrong!"
        - Вывести предупреждение "Be careful in the dark! It's can be dangerous"
        - Вывести цветной лог, где сообщение будет написано зеленым цветом и 30 размером шрифта
        - Сгрупировать несколько консоль логов, которые будут выводится друг за другом.
          | log 1
          |- Group
          |- Log 2
      */


var Table = ['Hey!', 'this', 'is', 'js', 'advanced', 'course'];

console.log('Combined log: ' + Table);

console.table(Table);

console.error("Oops! Something gonna wrong!");

console.warn("Be careful in the dark! It's can be dangerous");

console.log("%cMASSAGE!", "font-size: 30; color: green;");

console.log("log1");
console.group();
    console.log("Group");
    console.group();s
        console.log("log2");
console.groupEnd();


