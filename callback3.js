const getCardsUsingListID=(listID, cards, callback)=>{
    let data = cards[listID];
    if (data) {
      callback(null, data);
    } else {
      callback("Invalid ID");
    }
  };

module.exports=getCardsUsingListID;