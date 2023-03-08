string command = "start";

switch (command)
{ 
case "start":
    Console.WriteLine("Game is starting");
    break;
case "stop":
    Console.WriteLine("Games stopped");
    break;
case "wait":
    Console.WriteLine("Game paused");
    break;
default: 
    Console.WriteLine("Command not found");
    break;
}


int score = 91;

if(score >=88 && score <=100){
    Console.WriteLine("Success - AA");
}
else if(score >= 81 && score <=87){
    Console.WriteLine("Success - BA");
}
else if(score >=74 && score <= 80){
    Console.WriteLine("Success BB");
}
else if(score >=67 && score <= 73){
    Console.WriteLine("Success - CB");
}
else if(score >=60 && score <= 66){
    Console.WriteLine("Success - CC");
}
else if(score >=0 && score <= 59){
    Console.WriteLine("Fail - FF");
}   
else{
    Console.WriteLine("Invalid score");
} 

