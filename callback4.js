const { getBoardInfo } = require("./callback1.js");
const { getListBelongToBoard } = require("./callback2.js");
const { getCardsUsingListID } = require("./callback3.js");

module.exports = {
  getInfo: function (boards, list, card) {
    setTimeout(() => {
      boards.forEach((board) => {
        if (board.name === "Thanos") {
          let boardData = [];
          boardData.push(board);
          getBoardInfo(board.id, boardData, (error, data) => {
            if (error) {
              console.log(error);
            } else {
              console.log(data);
              let tempData=[];
              tempData.push(data);
              tempData.forEach((tempDataID) =>
                getListBelongToBoard(tempDataID.id, list, (err, data) => {
                  if (err) {
                    console.log(err);
                  } else {
                      console.log(data);
                    data.forEach((listdata) => {
                      if (listdata.name === "Mind") {
                        getCardsUsingListID(listdata.id, card, (err, data) => {
                          if (err) {
                            console.log(err);
                          } else {
                            data.forEach((listdata) => {
                              console.log(listdata);
                            });
                          }
                        });
                      }
                    });
                  }
                })
              );
            }
          });
        }
      });
    });
  },
};