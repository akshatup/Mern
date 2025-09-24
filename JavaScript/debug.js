let salary1 = [100, 200, 300, 400 ,500];
let salary2 = [1000, 2000, 3000, 4000 ,5000];


function calutalateTwentyPercent(num){
    return num * 0.2;

}

function calutalateTax(calutalateFn){
    let res = [];
    for (let i=0; i< salary1.length; i++){
        res.push(calutalateFn(salary1[i]));
    }
    return res;
}

let finalOutput = calutalateTax(salary1 , calutalateTwentyPercent);
console.log(finalOutput);