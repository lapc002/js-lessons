// Object 
const stringObj = {
  key: 123123,
  key1: 1111,
  upercase: function(value){
    return value.toUpperCase();
  }
}

// console.log('key1: ', stringObj.key1)
// ===========
// Array

const arr = [1,2,3,4,5,6,7];

// console.log('arr', arr);
// console.log('my arr[4] is', arr[4]);

const myClass = ['Sasha', 'Tibor', 'Petya'];
//console.log(myClass[2])

// Operators
// console.log('-------Operators-------');
// >
// <
// <=
// >=
// ==
// ===
// !
// &&  => false && true ==> false
// || =>  false || true ==> true
// console.log('1 < 3:', 1 < 3);
// console.log('2 == 2:' , 2 == 2);
// console.log("'2' == 2:" , '2' == 2);
// console.log("'2' === 2:" , '2' === 2);
// console.log('!true:', !true);
// console.log('!(1 < 3):', !(1 < 3));
// console.log('(5 > 3) && (119 < 120)', (5 > 3) && (119 < 120));
// console.log('(5 > 3) || (119 > 120)', (5 > 3) || (119 > 120));
// -----------------------

// const client = {
//   name: 'Ivan Pupkin',
//   age: 45,
//   height: 145,
//   weight: 50
// }

// const minWeight = client.height - 105; // 40
// const maxWeight = client.height - 95; // 50

// if (client.weight > maxWeight) {
//   console.log('Рекомендуємо вживати менше цукру')
// }

// if (client.weight < minWeight) {
//   console.log('Рекомендуємо вживати більше м`яса')
// }

// if (client.weight >= minWeight && client.weight <= maxWeight) {
//   console.log('Ура! Ми з вами не будемо працювати більше')
// }


function showResult(){
   const fullNameEl = document.getElementById('fullName');
   const fullName = fullNameEl.value;
}

