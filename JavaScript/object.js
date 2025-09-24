
// function sum(...args){
//     let sum = 0;

//     for(let i = 0; i < args.length; i++) {
//         sum += args[i];

//     }
//     return sum;
// }

// let res = sum(2, 3, 4);
// console.log(res);


function outer() {
    let value = 10;

    function inner() {
        console.log(value+=value);


    }
   inner();

}
outer();


