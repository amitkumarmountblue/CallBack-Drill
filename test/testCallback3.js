const cards = require("../Data/cards.json");
const getCardsUsingListID = require("../callback3.js");


getCardsUsingListID("qwsa221", cards).then(data=>console.log(data)).catch(error=>console.log(error));
getCardsUsingListID("azxs123", cards).then(data=>console.log(data)).catch(error=>console.log(error));
getCardsUsingListID("llkj123", cards).then(data=>console.log(data)).catch(error=>console.log(error));