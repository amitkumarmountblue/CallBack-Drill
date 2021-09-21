/*Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously */

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
            console.log(data);~
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
