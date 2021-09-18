const getBoardInfo = require("./callback1.js");
const getListBelongToBoard = require("./callback2.js");
const getCardsUsingListID = require("./callback3.js");

const getInfo = (boards, list, card) => {
  setTimeout(() => {
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        getBoardInfo(board.id, boards, (error, data) => {
          if (error) {
            console.log(error);
          } else {
            console.log(data);
            getListBelongToBoard(data.id, list, (err, data) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data);
                data.forEach((listdata) => {
                  if (listdata.name === "Space" || listdata.name === "Mind") {
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
            });
          }
        });
      }
    });
  });
};

module.exports = getInfo;
