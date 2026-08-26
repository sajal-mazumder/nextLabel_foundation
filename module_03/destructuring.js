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
    },
    colors: ['red', 'green', 'blue']
}
// console.log(student);

let {stName, id, age, religion, degree, degree:{ssc, hsc, honors, masters}} = student;
console.log(degree, ssc);

// variable update : alias

let {stName: newName, id: newId, age: newAge, religion:religions, degree: degrees, degree:{ssc:sscs, hsc:hscs, honors:honorss, masters:masterss}, colors:[first, second, third]} = student1;
console.log(stName, newId, third); 

// array destructuring

let arr = [2, 4, 5, [55, 6, 76, 550], 34];

let [first1, second1, third1,[fer, sec, thir, four], fifth] = arr;
console.log(fer, second1, four);