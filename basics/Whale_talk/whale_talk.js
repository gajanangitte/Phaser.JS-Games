input = "Arrey kya bol raha hain";

const vowels = ['a', 'e', 'i', 'o', 'u'];

resultArray = [];

for(let i = 0; i < input.length; i++) {
  // console.log(input[i]);
  for(let j = 0; j < 5; j++)
  {

    if(input[i] == 'e' || input[i] == 'E')
    {
      resultArray.push(input[i]);
      resultArray.push(input[i]);
      break;
    }

    if(input[i] == 'u' || input[i] == 'U')
    {
      resultArray.push(input[i]);
      resultArray.push(input[i]);
      break;
    }

    if(input[i] == 'a' || input[i] == 'i' || input[i] == 'o' || input[i] == 'A' || input[i] == 'I' || input[i] == 'O' )
    {
      resultArray.push(input[i]);
      break;
    }

  }
}

console.log(resultArray.join(' ').toUpperCase());