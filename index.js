// Code your solutions in this file
function writeCards(names) {
    let thanks = []
  for (let index = 0; index < names.length; index++) {
      thanks.push(`Thank you, ${names[index]}, for the wonderful surprise gift!`)
  }
  return thanks
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--
    }
}