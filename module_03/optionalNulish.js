// console.log(22);

// optional coalesing

let obj1 = {
    name: 'Sajal',
    city: 'Chattagram',
    age: 35,
    degree:{
        ssc: 4.56,
        hsc: 3.60,
        honors: 2,
        masters: 1
    }
}
let obj2 = {
    name: 'Borsa',
    city: 'Chattagram',
    age: 26,
    // degree {not definde}
}
// console.log(obj2.degree); // undefined
// console.log(obj2.degree.ssc); // error
// console.log(obj2?.degree?.ssc); // when using ? ternary it prints undefined

// nulish coalishing : ?? it prints a default value set by 

// console.log(obj2?.degree?.ssc ?? 'not appeared'); // it prints not appeared

let product = [
    {title: 'Laptop', price: 12000, model: 'hp elite BXC540', instock:  true},
    {title: 'Desktop', price: 10200, model: 'risen macbook', instock: false },
    {title: 'keyboard', price: 200, model: 'A4 tech N45', instock: true}
]


let sortedItem = product?.filter((p) => p.instock === 'yes')?.reduce((acc, currednt) => {
    return acc += currednt.price;
}, 0); // print default value 0 if it is set on otherwise print error
console.log(`Total bill of sorted item ${sortedItem}`); 
