let value = 7
if(value <= 1){
    console.log("sade deil")
    return
}else{
   for(let i = 2; i < value; i++){
    if(value % i == 0){
        console.log("sade deil")
        return
    }
   }
   console.log("sade")
}