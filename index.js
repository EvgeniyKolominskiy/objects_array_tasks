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

// 2. Функция принимает массив и выводит только четные элементы.
/**
 *
 * @param {Array} array
 */
function fooEven(array) {
	for (let i = 0; i <= array.length - 1; i++) {
		if (array[i] % 2 === 0) {
			console.log(array[i]);
		}
	}
}

fooEven(arr1);

// 3. Функция принимает массив и возвращает сумму всех элементов массива.
/**
 *
 * @param {Array} array
 * @returns {number}
 */
function sumArr(array) {
	let sum = null;
	for (let i = 0; i <= array.length - 1; i++) {
		sum += array[i];
	}
	return sum;
}

console.log(`Array sum: ${sumArr(arr1)}`);