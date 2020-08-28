'use strict';

/*Задание 1
Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.
1. Функция принимает массив и выводит его на экран.*/

const arr1 = [];

for (let i = 0; i < 10; i++) {
	arr1.push(Math.round(Math.random() * 100));
}

/**
 *
 * @param {Array} array
 */
function displayArray(array) {
	for (let i = 0; i <= array.length - 1; i++) {
		console.log(array[i]);
	}
}

displayArray(arr1);
