// console.log(121);

// map

// let arr = [1, 2, 3, 4];
// let newArr = arr.forEach((a, index) => {
//     console.log(`${index + 1} -> ${a}`);
//     // return `${index +1} -> ${a}` // foreach can't return
// })
// console.log(newArr);

// let newArra = arr.map((a, index) => {  // print a new array
//     // console.log(`${index + 1} -> ${a}`);
//     return `${index} -> ${a}`  // map can return 
// })
// console.log(newArra);

// let apple = ['apple', 'banana','lichi','orange'];
// let newApple = apple.map((app, indx) => app.toLowerCase()) ;
// let newApple1 = apple.map((app, indx) => app.toUpperCase());
// console.log(newApple, '\n',newApple1);  // returns a new array

// let nwapple = apple.filter((apps) => apps.length >= 6); // print all matched result
// let nwapples = apple.find((apps) => apps.length >= 6); // only print first match result
// console.log(nwapple, nwapples);

// // includes,some, every methods

// let stdnt = [
//     {name: 'sajal', marks: 90},
//     {name: 'borsa', marks: 80},
//     {name: 'ayan', marks: 78}
// ]

// let stdntInclude = stdnt.includes((st) => st.marks > 85); // true or false print
// let stdntSome = stdnt.some((st) => st.marks > 85); // true or false print
// let stdntEvery = stdnt.every((st) => st.marks > 85); // true or false print
// console.log(stdntInclude, stdntSome, stdntEvery);

// more array methods

let product = [
    {title: 'Laptop', price: 12000, model: 'hp elite BXC540', instock:  true},
    {title: 'Desktop', price: 10200, model: 'risen macbook', instock: false },
    {title: 'keyboard', price: 200, model: 'A4 tech N45', instock: true}
]
// for( let i = 0; i < product.length; i++){
//     // console.log(product[i]); 
//     // console.log(product[i].price) // returns only price
// }

// reduce method
// let productPrice = product.reduce((acc, current) => { // returns total without apply for loop
//     return acc += current.price;
// }, 0);
// console.log(productPrice);

// sort method

// let numArr = [ 2, 6, 4, 63, 67, 53, 1, 45];
// // applying in numerical array
// let sorted = numArr.sort(); // default sorting accending : lower to topper
// let sortAccend = numArr.sort((a, b) => a - b); // accending method
// let sortDecend = numArr.sort((a, b) => b - a); // decending method : topper to lower
// console.log(sorted, '\n', sortAccend, '\n', sortDecend);

// using in an array that contains multi object 

// let accendSort = product.sort((a, b) => a.price - b.price); // lower price to topper price
// let deccendSort = product.sort((a, b) => b.price - a.price);  // topper price to lower price
// console.log(accendSort, '\n', deccendSort); 

// sorting using reduce and filter method based on inStock and than calculate total bill of sortec item.
let sortedItem = product.filter((p) => p.instock === true).reduce((acc, currednt) => {
    return acc += currednt.price;
}, 0);
console.log(`Total bill of sorted item ${sortedItem}`);