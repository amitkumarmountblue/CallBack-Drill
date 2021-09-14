const getListBelongToBoard=(boardId, list, callback)=>{
    setTimeout(() => {
      let data = list[boardId];
      if (data) {
        callback(null, data);
      } else {
        callback("Invalid ID");
      }
    }, 2 * 1000);
  };

  module.exports = getListBelongToBoard;