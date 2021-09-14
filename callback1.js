const getBoardInfo=(boardID, boards, callback)=>{
    setTimeout(() => {
      let data = boards.find((boarddetails) => boarddetails.id === boardID);
      if (data) {
        callback(null, data);
      } else {
        let err = new Error("Invalid ID");
        callback(err);
      }
    }, 2 * 1000);
  };

  module.exports = getBoardInfo;