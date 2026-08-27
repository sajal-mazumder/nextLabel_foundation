// console.log(99);

// ... three dots spread old array or object to a new array or object

let arr = [ 2, 4, 5, 65, 654, 43, 34];

let arr2 = [...arr, 12, 32, 33];
console.log(arr2);

let obj1 = {
    name: 'Sajal',
    id: 34,
    age: 36,
    religion: 'Hindhu',
    maritalStatus: 'Married'
}

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

let obj3 = {
    ...obj1,
    ...obj2,
    favColor: 'Green'
}
console.log(obj3);