// console.log(44);

// array problem solving
// find the maximum num in an array and minimum 

// let marks = [2, 3, 4];
// let max = marks[0];
// let min = marks[0];
// for(let i = 1; i < marks.length; i++){
//     if (max < marks[i]) {
//         max = marks[i];
//     }
// }
// console.log( 'max is: ', max);

// for( let i = 1; i < marks.length; i++){
//     if (min > marks[i]) {
//         min = marks[i]
//     }
// }
// console.log('min is: ', min);

// sum  [2, 3, 4]
// let sum = 0;
// for( let i = 0; i < marks.length; i++){
//     // console.log(marks[i]);
//     sum += marks[i];
// }
// console.log(sum);

// using for of
// for( let mark of marks){
//     // console.log(mark);
//     sum += mark;
// }
// console.log(sum);
// console.log(sum / marks.length.toFixed(2)); // average

// reverse array  [2, 3, 4]
// let newArr = [];
// for( let i = marks.length - 1; i >= 0; i--){
//     // console.log(marks[i]);
//     newArr.push(marks[i]);
// }
// console.log(newArr);


// object problem solving

// let student = {
//     name: 'Sajal',
//     id: 202,
//     marks: {
//         bangla: 78,
//         english: 89,
//         math: 67
//     }
// }

// let totalMark = 0;
// let totalSbj = 0;

// for( let mark in student.marks){
//     // console.log(mark);
//     // console.log(student.marks[mark]);
//     // console.log(mark); // print only keys
//     // console.log(student[mark]); // values
//     // console.log(Object.entries(student)[0]);
//     totalMark += student.marks[mark];
//     totalSbj++;
// }
// console.log(totalMark, totalSbj);
// let average = (totalMark / totalSbj).toFixed(3);
// console.log(average);

// // checking A+ or not
// if (average >= 80) {
//     console.log('Congratulations: You got A+.')
// }else{
//     console.log('You are under A+.')
// }


// task 

let cart = [
    {
        name: 'shirt',
        price: 1200,
        quantity: 2
    },
    {
        name: 'pant',
        price: 1000,
        quantity: 4
    },
    {
        name: 'shoes',
        price: 1200,
        quantity: 1
    },
]

let totalItemBuyed = 0;
let totalBill = 0;

for( let i = 0; i < cart.length; i++){
    // console.log(cart[i]);
    totalItemBuyed = totalItemBuyed + cart[i].quantity;
    totalBill = totalBill + cart[i].price * cart[i].quantity;
}
console.log(totalItemBuyed, totalBill);


function bill(arr) {
    let totalBill = 0;
    let totalItemBuyed = 0;
    for( let product of arr){
        totalBill += product.price * product.quantity;
        totalItemBuyed += product.quantity;
    }
    return{totalBill, totalItemBuyed}
}
console.log(bill(cart));
