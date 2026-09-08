
// props and children

// export default function Card({name, age, isMarried, children}){
//     // console.log(props)
//     return (
//         <div>
//             {children}
//             <p>name: {name}</p>
//             <p>age: {age}</p>
//             <p>isMarried: {isMarried}</p>

//         </div>
//     )
// };

function CardsSend({name, age, weight, height}){

    // if (age < 18) {
    //     return <div className="cards">You are too Young.</div>
    // }
    // return(
    //     <div className="cards">
    //         {children}
    //         <p>Name: {name}</p>
    //         <p>Age: {age}</p>
    //         <p>Weight: {weight}</p>
    //     </div>
    // )

    // rule 2 of condition 

//    return(
//     <>
//         {age > 18 &&(
//            <div className="cards">
//              <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Weight: {weight}</p>
//         </div> 
//         )}
//         {age < 18 &&(
//            <div className="cards">
//              {/* <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Weight: {weight}</p> */}
//             You are too young.
//         </div> 
//         )}
//    </>
//    )

    // rule 3 : ternary

    // return(
    //    <>
    //     {age > 18 ? (
    //         <div className="cards">
    //             <p>Name: {name}</p>
    //             <p>Age: {age}</p>
    //             <p>Weight: {weight}</p>
    //         </div>
    //     ) : <div className="cards"> You are too Young </div>}
    //    </>
    // )


    // array of object rendering

    return(
        
        <div className="cards">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
            <p>Height: {height}</p>
        </div>
    )
}
export default CardsSend;

// children

// export default function Card(props){
//     // console.log(props)
//     return (
//         <div>
//             {props.children}
//             <p>name: {props.name}</p>
//             <p>age: {props.age}</p>
//             <p>isMarried: {props.isMarried}</p>

//         </div>
//     )
// };
