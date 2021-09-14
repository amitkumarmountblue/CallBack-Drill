module.exports = {
  getCardsUsingListID: function (listID, cards, callback) {
    let data = cards[listID];
    if (data) {
      callback(null, data);
    } else {
      let err = new Error("Invalid ID");
      callback(err);
    }
  },
};