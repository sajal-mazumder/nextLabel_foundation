// console.log('sajal')

// js types- ssbbnnuo - string, symbol, big-int, boolean, number, null, undefined, object

// 1-4 string works

// let sajal = 'Sajal Mazumder' + '\n';
// let borsa = `Borsa Rani Roy`+ '\n';
// let we = 'Sajal and "Borsa" are spouse.'+ '\n';
// let weAre = "We are \"husband and wife\" "
// console.log(sajal, borsa, we, weAre);
// console.log(`${sajal} ${borsa} ${we}`);


// 1-7 function

// function total (price, quantity) {
//     let grandTotal = price * quantity;
//     return grandTotal;
// }
// let bill = total(10, 20);
// let save = 500 - bill;
// console.log(bill, save);

// function hello (name) {
//     console.log(`Hello ${name}`)
// }
// hello("Sajal. How are You?");


// 1-8 arrow function

// let total = (price , quantity) => {
//     let grandTotal = price * quantity;
//     return grandTotal;
// }
// let bill = total(20, 20);
// let save = 500 - bill;
// console.log(bill, save);

// one line arrow function do not need return

// let add = (a, b) => a + b;
// let sum = add( 50, 100);
// console.log(sum);


// let weight = process.argv[2];
// let height = process.argv[3];

// function calculateBMI (weight, height) {
//     let bmi = weight / (height * height);
//     return bmi;
// }
// console.log(calculateBMI(weight, height));


function calculateBMI (weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18) {
        console.log('Khub chikon.')
    }else if (bmi <= 25) {
        console.log('Good position')
    }else if (bmi <= 30) {
        console.log('Risk zone.')
    }else{
        console.log('Obesity.')
    }
    return bmi.toFixed(3);
}
console.log(calculateBMI(70, 1.5));