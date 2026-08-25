// console.log(33);

// for in loop

let obj = {
    name: 'sajal',
    age: 35,
    gender: 'male',
    maritalStatus: 'married',
    education: 'MSc in Botany.'
}

for( let element in obj){
    console.log(element, '->', obj[element]);
}

let numArr = [2, 3, 4, 55, 34, 44, 567];
for(let element of numArr){
    console.log('numbers: ', element);
}