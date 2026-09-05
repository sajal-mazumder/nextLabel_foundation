// 1. file extention must be .jsx
// 2. component name must start with capital letter.
// 3. there must be default export / export
// 4. there must be a single returned.


//  export system 1:

// const TestComponent = () => {
//     return <h1>Test Component First React code. Date : 05/ 08/ 2026.</h1>
// }
// export default  TestComponent;

// export system 2:

// export const TestComponent = () => {
//     return <h2>Test component First React code.</h2>
// }


// system 3:

// export default function TestComponent(){
//     return <h1>test component</h1> <h2>I am sajal</h2> // pasapashi duita tag eivabe lekha jabena.
// }

// let myName = 'Sajal'

// export default function TestComponent(){
//     // return (
//     //     <div>
//     //         <h1>My first component.</h1>
//     //         <span>Hi, I am Sajal. A new web developer.</span>
//     //     </div>

//     // )
    
//     // jokhon amra multiple div wrap na kore single root hisebe export korte chai tokhon react fragment <> </> use kore multiple div export korte pari.

//     return (
//         <>
//         <div>
//             <h2>My first React code.</h2>
//             <span>Hello, I am {myName}.</span>  // dynamically variable render 
//         </div>
//         <div>
//             <h2>My Experiences.</h2>
//             <ul>
//                 <li>Html</li>
//                 <li>Css</li>
//                 <li>JavaScript</li>
//                 <li>Tailwind css</li>
//                 <li>React</li>
//             </ul>
//         </div>
//         </>
//     )
// }


export default function TestComponent (){
    return(
        <>
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
        </>
    );
}