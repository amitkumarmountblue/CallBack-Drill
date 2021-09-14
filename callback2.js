module.exports = {
  getListBelongToBoard: function (boardId, list, callback) {
    setTimeout(() => {
      let data = list[boardId];
      if (data) {
        callback(null, data);
      } else {
        let err = new Error("Invalid ID");
        callback(err);
      }
    }, 2 * 1000);
  },
};
