// console.log(77);
// feel the power of template literal

let price = 500;
let quantity = 3;

// console.log(`Total Price ${price * quantity} taka \nPay for your cart.`);

// discount calculate using function

function billDiscount (totalAmount){
    let discount = totalAmount * 0.1;
    // console.log(discount);
    return discount;
}

let totalBill = price * quantity;
let totalDiscount = billDiscount(totalBill);

console.log(`Your discount on cart ${totalDiscount} taka. \nYour total bill on cart after having 10% discount ${totalBill - totalDiscount}`);

// using ternary

let inStock = 5;
console.log(`${inStock > 0 ? `Product in Stock. \nYour discount on cart ${totalDiscount} taka. \nYour total bill on cart after having 10% discount ${totalBill - totalDiscount} taka.` : 'Out of Stock'}`)


