/*	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/

const getCardsUsingListID=(listID, cards)=>{
   return new Promise((resolve,reject)=>{
    let data = cards[listID];
    if (data) {
      resolve(data);
    } else {
      reject("Invalid ID");
    }
   })
  };

module.exports=getCardsUsingListID;

