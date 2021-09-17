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

