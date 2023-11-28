var c = 300;
let a = 200;



if(true) {
    let a = 10;
    const b = 20;
    c = 20;
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Golam Rabbi"
    function two(){
        const website = "Youtube";
        console.log(username)
    }
    two()
    // console.log(website); // website is not defined
}

// one()

if(true){
    const username = "Golam"
    if(username === "Golam"){
        console.log(username)
        const website = " Youtube"
    }

    // console.log(username + website) // website is not defined
}

// console.log(username)  // username is not defined

// ++++++++++++++Interesting++++++++++++



console.log(addOne(10)); // 11
function addOne(num){
    return num + 1;
}



console.log(addTwo(10)) // cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}








