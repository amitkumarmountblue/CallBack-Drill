/*	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

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

  