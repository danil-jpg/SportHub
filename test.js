'use strict';

let set = new Set();

let vasya = { name: "Вася" };
let petya = { name: "Петя" };
let dasha = { name: "Даша" };

// посещения, некоторые пользователи заходят много раз
set.add(1);
set.add(1);
set.add(2);
set.add(3);
set.add(4);

// set сохраняет только уникальные значения
console.log(set.size); // 3

set.forEach(user => console.log(user)); // Вася, Петя, Даша