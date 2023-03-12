let arr = [ 1, 2, -5, 8, -3, 9 , -7 ];
let sum1 = 0;
let sum2 = 0;
for(let i in arr) {
    if(arr[i] > 0) {
        sum1 += arr[i];
    }else{
        sum2 += arr[i];
    }
}
console.log(sum1, sum2);