// console.log(110);

// rest operator is oposite of spread operator
// it can apply in function, array, object etc.

function add(...numbers){
    let total = 0;
    for(num of numbers){
        total += num;
    }
    return total;
}
// console.log(add(1,2,3))
// console.log(`Total of numbers is ${add(1,2,3)}`);

// object rest operator

let obj2 = {
    degree:{
        ssc: 4.56,
        hsc: 3.60,
        honors: 2,
        masters: 1
    },
    instution: {
        school: 'Sandwip',
        college: 'Feni',
        varsity: 'Chattagram'
    }
}

// let {instution,...remain} = obj2;
let {instution: {school, ...remain}} = obj2 // by destructuring object.
// console.log(remain); 

// array rest operation

let arr = [ 2, 4, ['sajal','borsa'], {a: 5, b: 9}];
// let [ fr, ...remainss] = arr;
// console.log(remainss);

let [
    fr,
    second,
    [name, ...remainingNames],
    obj
] = arr;
console.log(remainingNames); // print only borsa
let [fre, snd, nstdarr, {a, ...rem}] = arr // print only b: 9

console.log(rem);