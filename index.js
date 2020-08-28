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

// 4. Функция принимает массив и возвращает его максимальный элемент.
/**
 *
 * @param {Array} array
 * @returns {number} Maximum element of the array
 */
function maxElem(array) {
	let max = null;
	for (let i = 0; i <= array.length - 1; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

console.log(`Array max element: ${maxElem(arr1)}`);

// 5. Функция добавления нового элемента в массив по указанному индексу.
/**
 *
 * @param {Array} array Array where the specified Element will be inserted
 * @param element Element which will be inserted into Array
 * @param place Index at which the Element will be inserted into Array
 */
function addElem(array, element, place) {
	for (let i = array.length; i >= 0; i--) {
		if (i > place) {
			array[i] = array[i - 1];
		}
		if (i === place) {
			array[i] = element;
		}
	}
}

addElem(arr1, 12, 7);
console.log(`Array with added element 12 at index 7: ${arr1}`);

// 6. Функция удаления элемента из массива по указанному индексу.

/**
 *
 * @param {Array} array
 * @param {Number} place Index of the element to be removed from array.
 */
function removeElem(array, place) {
	for (let i = 0; i < array.length - 1; i++) {
		if (i >= place) {
			array[i] = array[i + 1];
		}
	}
	delete array[array.length - 1];
	array.length -= 1;
}

removeElem(arr1, 7);
console.log(`Array with removed element at index 7: ${arr1}`);