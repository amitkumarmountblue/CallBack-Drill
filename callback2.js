const getListBelongToBoard=(boardId, list)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let data = list[boardId];
      if (data) {
        resolve(data);
      } else {
        reject("Invalid ID");
      }
    }, 2 * 1000)
  })
  };

  module.exports = getListBelongToBoard;

  