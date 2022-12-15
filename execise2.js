let OddishEvenish = function(num){
    let stringNum = '' + num;
let sum = 0;
for(let i = 0; i < stringNum.length; i++ ){
    sum += + stringNum[i];

}
console.log(sum);
if (sum % 2 ==0){
    return "Evenish";
} else{
    return "Oddish";
}
}

console.log(OddishEvenish(324));
