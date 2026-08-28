// console.log(33);

// export method can export a function or variable to another file 

export function add (a, b){ // naming export
    return a +b;
}

function sub (a, b){  // default export
    if ( a > b) {
        return a - b;
    }else{
        return b - a;
    }
}

export default sub;

export let myName = 'Sajal';

// these function and variable can be access from import file
