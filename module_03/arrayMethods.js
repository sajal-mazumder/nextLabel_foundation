// console.log(121);

// map

let arr = [1, 2, 3, 4];
// let newArr = arr.forEach((a, index) => {
//     console.log(`${index + 1} -> ${a}`);
//     // return `${index +1} -> ${a}` // foreach can't return
// })
// console.log(newArr);

let newArra = arr.map((a, index) => {
    // console.log(`${index + 1} -> ${a}`);
    return `${index} -> ${a}`  // map can return 
})
console.log(newArra);

let apple = ['apple', 'banana','lichi','orange'];
let newApple = apple.map((app, indx) => app.toLowerCase()) ;
let newApple1 = apple.map((app, indx) => app.toUpperCase());
console.log(newApple, '\n',newApple1);

let nwapple = apple.filter((apps) => apps.length >= 6);
let nwapples = apple.find((apps) => apps.length >= 6); // only print first match result
console.log(nwapple, nwapples);

// includes,some, every methods

let stdnt = [
    {name: 'sajal', marks: 90},
    {name: 'borsa', marks: 80},
    {name: 'ayan', marks: 78}
]

let stdntInclude = stdnt.includes((st) => st.marks > 85);
let stdntSome = stdnt.some((st) => st.marks > 85);
let stdntEvery = stdnt.every((st) => st.marks > 85);
console.log(stdntInclude, stdntSome, stdntEvery);
console.log(null && 'b');
console.log('a' || 'b');
