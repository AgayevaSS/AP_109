let arr = [ -7, -71, 66, 11 ,3 , 8 , 67];
for(let i = 0; i < arr.length - 1; i++) {
    for( let j = 0; j < i; j++) {
        if(arr[j] > arr[j + 1]) {
            let m = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = m;
        }
    }
}   
console.log(arr.at(-2), arr[1]);
