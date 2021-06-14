console.log("Hello Scopes");

//console.log("x: ", x);  throw an error if we use let/ return undefined if we use var
//global
//var x = 10;
let x = 10;
console.log("x: ", x); 

let y = 50;
//global
function foo(){

    //function scope
    var x = 20;
    let y = 40;
    console.log("foo x: ", x);
    console.log("foo y: ", y);
    if(x > 10){
        let y = 30;
        console.log("foo block y: ", y);
    }
    console.log("foo y: ", y);
    //console.log("foo y: ", y); // error if we use let/const
}
console.log("global y: ", y);
foo();
console.log("global y: ", y);

