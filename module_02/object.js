

let user = {
    firstName: 'Sajal',
    lastName: 'Mazumder',
    index: 200,
    birth: '15/ 02/ 1991',
    education: 'MSc'
}
// console.log(user.firstName); // dot notation
// console.log(user['birth']);  // bracket notation

// object methods
delete user.index; // deleting element
user.education = 'MSc in Botany'; // adding values
user.education = {
    ssc: 'Sandwip',
    hsc: 'Feni',
    honors: 'Chattagram College'
}  // updating data

// console.log(user);
// console.log(user.keys()) // error
// console.log(Object.keys(user)); // keys result as an array
// console.log(Object.values(user));  // values result as an array
// console.log(Object.entries(user));  // key values result as an array.

// nested array and objects

let arr = ['sajal', 'ramesh',['abhro', 'shubro'],{
    name: 'toyota',
    model: 'b25',
    color: 'black',
    showroom: {
        dhaka: 'dhanmondi',
        kumilla: 'sadar',
        chattagram: 'gec',
        manager: ['rahim','karim','babul']
    }
}];
arr[3].showroom.manager[0] = 'akter'  // update data
console.log(arr[3].showroom.manager[0]);
