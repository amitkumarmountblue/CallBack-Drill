const cards = require("../Data/cards.json");
const getCardsUsingListID = require("../callback3.js");

const callback = (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
};

getCardsUsingListID("qwsa221", cards, callback);
getCardsUsingListID("azxs123", cards, callback);
getCardsUsingListID("llkj123", cards, callback);