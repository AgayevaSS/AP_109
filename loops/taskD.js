let from = 3; to = 12;
for(from = from + 1; from < to; from++){
    if(from > 1){
        for(let i = 2; i < from; i++){
            if(from % i == 0){
                break
            }
            console.log(from)
            break
        }

    }
}