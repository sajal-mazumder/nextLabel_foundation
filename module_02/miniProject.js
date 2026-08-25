// console.log(66);

let students = [
    { id: 101, name: 'sajal', age: 35, sub: 'botany' },
    { id: 102, name: 'borsa', age: 25, sub: 'degree' },
    { id: 104, name: 'akash', age: 39, sub: 'zoology' }
]

function addStudents ( name, age, sub){
    let newId = students.length > 0 ? students[students.length - 1].id +1 : 101;
    let newStudent = {
        id: newId,
        name: name,
        age: age,
        sub: sub
    }
    students.push(newStudent);
    // console.log('Student added successfully.')
}
addStudents('ahona', 21, 'bangla');
// console.log(students);

// loop in object

function getAllStudents (){
    for( let student of students){
        console.log(student);
    }
}
// getAllStudents();

function findStudent (id){
    let foundStdnt = null;
    
    for( let student of students){
        // console.log(student);
        if (student.id == id ) {
            foundStdnt = student;
            break;
        }
    }

    if(foundStdnt){
        console.log('found student: ', foundStdnt)
    }
    else{
        console.log('Error: 404. not found.')
    }
}
// findStudent(101);

// delete students

function deleteStudent (id){
    let targetStudent = -1;
    for(let i = 0; i < students.length; i++){
        if (students[i].id == id ) {
            targetStudent = i;
            break;
        }
    }
    if(targetStudent != -1){
        let deletedStudent = students.splice(targetStudent, 1)
        console.log('Deleted student succesfully.');
        return deletedStudent;
    }
    else{
        console.log('Error: 404. not found.')
    }
}
deleteStudent(101);
getAllStudents();