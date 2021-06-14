
//function expression
const sum = function(x, y){
    return x + y;
}
console.log("sum: ", sum(4, 5));

const calc = (x, y)=>{
    return x + y;
}
console.log("calc: ", calc(4, 5));

// const sqaureIt = function(x){
//     return x * x;
// }
const sqaureIt = x => x * x;
console.log("sqaureIt: ", sqaureIt(16));

//functional programming

const numbers = [2,1,9,11,5,8,4,7,12,6, 3];

const result 
        = numbers
            .filter(i => i % 2 == 0)
            .map(i => i * i);
console.log("result", result);

const copy = [...numbers];
numbers.push(100);
console.log("numbers", numbers);
console.log("copy", copy);
