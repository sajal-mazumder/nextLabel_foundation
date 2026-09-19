import '../style.css'

function Display({counting}){
    console.log('display')
    return (
        <>
        <div>
           {counting} 
        </div>
        </>
    )
}

export default Display;