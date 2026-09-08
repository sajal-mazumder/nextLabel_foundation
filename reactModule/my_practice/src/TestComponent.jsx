// 1. file extention must be .jsx
// 2. component name must start with capital letter.
// 3. there must be default export / export
// 4. there must be a single returned.


//  export system 1:

// let TestComponent = () =>{
//     return <h1>hello guys.</h1>
// }

// export default TestComponent;

// export system 2

export  let  Tests = () => {
    return <h2>Hello Friends.</h2>
}



// system 3:

// export default function Test(){
//     return <h1>hello brothers.</h1>
// }

// function Testy(){
//     return <h2>Testy treat.</h2>
// }
// export default Testy;


// jokhon amra multiple div wrap na kore single root hisebe export korte chai tokhon react fragment <> </> use kore multiple div export korte pari.

function FullTest(){
    return(
        <>
        <div>Fulltes texts.</div>
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
            </ul>
        </div>
        </>
    )
}
export default FullTest;


