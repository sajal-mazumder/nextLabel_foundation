// ! 1. component must contain .jsx extention
// ! 2. component name must starts with Capital letter.

// const TestComponent = () => {
//     // return <h1 className="style">Test component. </h1> // single line 

//     return(  // multiple line return and multi div using fragment <> </>
//         <>
//         <div>
//             <h1>Welcome to my react journey.</h1>
//         </div>
//         <div>
//             <div>HTML learning.</div>
//             <div>CSS learning.</div>
//             <div>Javascript learning.</div>
//         </div>
//         </>
//     )
// }
// export default TestComponent;

const myName = 'sajal'

export const TestComponent = () =>{  // naming export 
    return(
        <>
        <div>
            <p>My name is {myName}</p>
            <p>Borsa</p>
            <p>We are spouse.</p>
        </div>
        <div>
            <p>html</p>
            <p>css</p>
            <p>javascript</p>
        </div>
        </>
    )
}


export const TestComponent2 = () =>{
    return(
        <div>
            <h1>Hello World.</h1>
        </div>
    )
}



// props and children

// let nameing = 'sajal mazumder';
// let ageing = 34;

// export function NameingCard(props){
//     // console.log(props);
//     return(
//         <>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>IsMarried: {props.isMarried}</p>
//         <p>HasJob: {props.hasJob}</p>
//         </>
//     )
    
// };
// NameingCard('Sajal mazumder');



export function NameingCard({name, age, isMarried, hasJob, children}){
    // console.log(name, age, isMarried, hasJob);
    return(
        <>
        {children}
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>IsMarried: {isMarried}</p>
        <p>HasJob: {hasJob}</p>
        </>
    )
    
};