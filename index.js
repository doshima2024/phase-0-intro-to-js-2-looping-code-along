// Code your solutions in this file


  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;

}

wrapGifts(gifts);




function writeCards(names, event) {

const messages = [];

    for(let a = 0; a < names.length; a++) {

        const message = `Thank you, ${names[a]}, for the wonderful surprise gift!`

        messages.push(message) }

        return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

console.log(writeCards(names, event));
