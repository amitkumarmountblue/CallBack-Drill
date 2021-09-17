const getBoardInfo = require("./callback1.js");
const getListBelongToBoard = require("./callback2.js");
const getCardsUsingListID = require("./callback3.js");

const getInfo = (boards, list, card) => {
  setTimeout(() => {
    let ID;
    let listID;
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        ID = board.id;
      }
    });
    getBoardInfo(ID, boards)
      .then((data) => {
        console.log(data);
        return getListBelongToBoard(data.id, list);
      })
      .then((data) => {
        console.log(data);
        data.forEach((listData) => {
          if (listData.name === "Mind") {
            listID = listData.id;
          }
        });
        return getCardsUsingListID(listID, card);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  },2*1000);
};

module.exports = getInfo;
