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

export const TestComponent = () =>{  // naming export 
    return(
        <>
        <div>
            <p>Sajal</p>
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