

// props and children

export default function Card({name, age, isMarried, children}){
    // console.log(props)
    return (
        <div>
            {children}
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>isMarried: {isMarried}</p>

        </div>
    )
};


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
