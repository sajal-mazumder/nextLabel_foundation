// console.log(88);

// object destructuring

let student = {
    stName: 'Sajal',
    id: 345,
    age: 36,
    religion: 'Hindhu',
    degree:{
        ssc: 4.56,
        hsc: 3.60,
        honors: '2nd class',
        masters: '1st class'
    }
}
let student1 = {
    stName: 'Sajal Mazumder',
    id: 3490,
    age: 37,
    religion: 'Hindhusm',
    degree:{
        ssc: 4.56,
        hsc: 3.60,
        honors: '2nd class',
        masters: '1st class'
    }
}
// console.log(student);

let {stName, id, age, religion, degree, degree:{ssc, hsc, honors, masters}} = student;
console.log(degree, ssc);

let {stName: newName, id: newId, age: newAge, religion:religions, degree: degrees, degree:{ssc:sscs, hsc:hscs, honors:honorss, masters:masterss}} = student1;
console.log(newName, newId)