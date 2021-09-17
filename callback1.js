const getBoardInfo=(boardID, boards)=>{
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let data = boards.find((boarddetails) => boarddetails.id === boardID);
      if (data) {
        resolve(data);
      } else {
        reject("Invalid Id ");
      }
    }, 2 * 1000);
   })
  };

  module.exports = getBoardInfo;

  