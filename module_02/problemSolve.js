// console.log(44);

// array problem solving
// find the maximum num in an array and minimum 

let marks = [34, 54, 56, 65, 66, 70, 32, 51, 75, 43, 22];
let max = marks[0];
let min = marks[0];
for(let i = 1; i < marks.length; i++){
    if (max < marks[i]) {
        max = marks[i];
    }
}
console.log( 'max is: ', max);

for( let i = 1; i < marks.length; i++){
    if (min > marks[i]) {
        min = marks[i]
    }
}
console.log('min is: ', min);