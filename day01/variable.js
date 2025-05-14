// variable is js 

// var - global scope


if (true) {
    var name = "Doe";
    console.log(name); // Doe
    }
console.log(name); // Doe

// let - block scope

if (true) {
    let name = "Doe";
    console.log(name); // Doe
    }
console.log(name); // ReferenceError: name is not defined

// const - block scope and cannot be reassigned
if (true) {
    const name = "Doe";
    console.log(name); // Doe
    }
console.log(name); // ReferenceError: name is not defined