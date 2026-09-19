
import { useState } from 'react'
import '../style.css'

// function Card({name, age, children}){
//     if (age > 14) {
//         return (
//             <>
//                 {children}
//                 <div className="style">
//                     <p>Name: {name}</p>
//                     <p>Age: {age}</p>
//                 </div>
//             </>
//         )
//     }else{
//         return(
//             <>
//                 {children}
//                 <div className='style'>You are too young.</div>
//             </>
//         )
//     }
// }
// export default Card;


// short circute

// function Card({name, age, }){
//     return(
//         <>
//         {age > 18 && (
//             <div className='style'>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             </div>
//         )}

//         {age < 18 && (
//             <div className='style'>
//                 <p>You are too young to compete.</p>
//             </div>
//         )}
//         </>
//     )
// }
// export default Card;


// ternary operator

// function Card({name, age, isMarried}){
//     return(
//         <>
//         {age > 18 ? (
//             <div className='style'>
//                 <p>Name: {name}</p>
//                 <p>Age: {age}</p>
//                 <p>IsMarried: {isMarried}</p>
//             </div>
//         ): <p className='style'>You are too young. and you are not eleigible to compete.</p>}
//         </>
//     )
// }
// export default Card;


// array rendering dynamically

// function Card({name, age, isMarried}){
//     return(
//         <>
//             <div className='style'>
//                 <p>Name: {name}</p>
//                 <p>Age: {age}</p>
//                 <p>IsMarried: {isMarried}</p>
//             </div>
//         </>
//     )
// }
// export default Card;


//! event handling 

// function Card({name, age, isMarried}){
//     const clickHandler = (myName) =>{
//         console.log('Name: ' + myName)
//     }
//     const anotherClickHandler = (myAge) => {
//         console.log('Age: ' + myAge )
//     }
//     const anotherOne = (married) => {
//         console.log('isMarried: ' + married)
//     }

//     const finalGreeting = (name, age, isMarried) => {
//         clickHandler(name)
//         anotherClickHandler(age)
//         anotherOne(isMarried)
//     }
//     return(
//         <>
//         {/* <div>
//             onClick= {}
//             onMouseDown= {}
//             onMouseEnter= {}
//             onMouseLeave= {}
//             onScroll= {}
//             onSubmit= {}
//             onBlur= {}

//         </div> */}
//             <div onClick={() => finalGreeting(name, age, isMarried)} className='style'>
//                 <p>Name: {name}</p>
//                 <p>Age: {age}</p>
//                 <p>IsMarried: {isMarried}</p>
//             </div>
//         </>
//     )
// }
// export default Card;


// event handling and hooks 

// function Card({name, age, isMarried}){
//     const [person, setPerson] = useState('');
//     // let helloText = 'Hello'

//     const clickHandler = (myName) =>{
//         // helloText = helloText + ' ' + myName;
//         // console.log('Name: ' + myName)
//         // console.log(helloText)
//         setPerson(myName);
//     }
//     console.log(person)
    
//     return(
//         <>
//             <div onClick={() => clickHandler(name)} className='style'>
//                 <p>Name: {name}</p>
//                 <p>Age: {age}</p>
//                 <p>IsMarried: {isMarried}</p>
//                 {/* {helloText} */}
//                 {person}
//             </div>
//         </>
//     )
// }
// export default Card;



function Card({name, age, isMarried}){

    const [member, setMember] = useState('');

    const clickHandler = (myName) =>{
        console.log('Name: ' + myName)
    }
    const anotherClickHandler = (myAge) => {
        console.log('Age: ' + myAge )
    }
    const anotherOne = (married) => {
        console.log('isMarried: ' + married)
    }

    const finalGreeting = (name, age, isMarried) => {
        clickHandler(name)
        anotherClickHandler(age)
        anotherOne(isMarried)
        setMember({name, age, isMarried})
    }
    return(
        <>
        {/* <div>
            onClick= {}
            onMouseDown= {}
            onMouseEnter= {}
            onMouseLeave= {}
            onScroll= {}
            onSubmit= {}
            onBlur= {}

        </div> */}
            <div onClick={() => finalGreeting(name, age, isMarried)} className='style'>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>IsMarried: {isMarried}</p>
                
            </div>

            <hr />

            {member && (
                    <div className='style2'>
                        <h3>Selected Member UI:</h3>
                        <p>Clicked Name: {member.name}</p>
                        <p>Clicked Age: {member.age}</p>
                        <p>Clicked Married Status: {member.isMarried ? "Yes" : "No"}</p>
                    </div>
                )}
            
        </>
    )
}
export default Card;