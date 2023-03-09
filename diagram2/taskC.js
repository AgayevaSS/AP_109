let value = 4528
let count = 0
do{
    count = count + value % 10
    value = Math.trunc(value / 10)
}while(value > 1)
console.log(count)