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
    return discountAmount;
}
console.log(calculateDicountAmout(200, 10))
