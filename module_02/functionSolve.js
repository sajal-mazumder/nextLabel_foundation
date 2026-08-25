// console.log(55);

//we will build a order processing system to understand dry and how important the function is.

function isValidPrice (price) {
    return typeof price === 'number' && price > 0;
}
// console.log(isValidPrice(50))

function isValidEmail (email) {
    return email.includes('@') && email.includes('.com')
}
// console.log(isValidEmail('.com')) 

function calculateDicountAmout (price, discountPercent) {
    if (!isValidPrice(price)) {
        return 0;
    }
    let discountAmount = (price * discountPercent) / 100;
    return price - discountAmount;
}
// console.log(calculateDicountAmout(200, 10))

function calculateFinalBill (price, vatPercent = 15) {
    let vat = (price * vatPercent) / 100;
    return price + vat;
}
// console.log(calculateFinalBill(300))

function convertBDT (amount){
    return ` ${amount.toFixed(2)} BDT`
}


function capitalized (str){
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// console.log(capitalized('sajal'))

function processOrder ( user, itemPrice, discountCode){
    console.log(`--- Processing order for --- ${capitalized(user.name)}`);
    if (!isValidEmail) {
        console.log(`Error: Invalid user email.`)
        return;
    }
    let currentPrice = itemPrice;

    if (discountCode == 'SS') {
        currentPrice = calculateDicountAmout(itemPrice, 10);
        console.log('10% discount applied.')
    }
    else{
        console.log('Error: Invalid discount code.');
        return;
    }

    let totalBill = calculateFinalBill(currentPrice);
    console.log('Final amount to pay:',convertBDT(totalBill));
    console.log('Order completed successfully.')
}

let user1 = {
    name: 'Sajal Mazumder',
    email: 'sajal2@gmail.com'
}
processOrder(user1, 2000, "SB")