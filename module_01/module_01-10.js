// console.log('sajal')

// js types- ssbbnnuo - string, symbol, big-int, boolean, number, null, undefined, object

// 1-4 string works

let sajal = 'Sajal Mazumder' + '\n';
let borsa = `Borsa Rani Roy`+ '\n';
let we = 'Sajal and "Borsa" are spouse.'+ '\n';
let weAre = "We are \"husband and wife\" "
console.log(sajal, borsa, we, weAre);
console.log(`${sajal} ${borsa} ${we}`);


// 1-7 function

function total (price, quantity) {
    let grandTotal = price * quantity;
    return grandTotal;
}
let bill = total(10, 20);
console.log(bill)