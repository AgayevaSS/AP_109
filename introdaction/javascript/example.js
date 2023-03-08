let command = 'start' 

switch(command) {
    case 'start':
        console.log('Game is starting')
        break
    case 'stop':
        console.log('Games stopped')
        break
    case 'wait':
        console.log('Game paused')
        break
    default:
        console.log('Command not found')    
}


let score = 99  

if(score >= 88 && score <= 100){
    console.log('Success - AA')
} else if(score >= 81 && score <= 87){
    console.log('Success - BA')
} else if(score >= 74 && score <= 80){
    console.log('Success - BB')
} else if(score >= 67 && score <= 73){
    console.log('Success - CB')
} else if(score >= 60 && score <= 66){
    console.log('Success - CC')
} else if(score >= 0 && score <= 59){
    console.log('Fail - FF')
} else {
    console.log('Invalid score')
}