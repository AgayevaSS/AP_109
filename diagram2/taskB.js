
let value = 4;

for (let i = 1; i <= value; i++) {
  let output = ''; 

  for (let j = 1; j <= i; j++) {
    output += j + ' ';
  }
  console.log(output.trim()); 
}
