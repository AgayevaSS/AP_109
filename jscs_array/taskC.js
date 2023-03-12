let arr = [ 1, 2, -5, 8, -3, 9 , -7 ];
let limit = 4;
let arr1 = [];
for(let i in arr) {
    if(arr[i] > 4) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);