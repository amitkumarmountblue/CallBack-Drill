const { getBoardInfo } = require("./callback1.js");
const { getListBelongToBoard } = require("./callback2.js");
const { getCardsUsingListID } = require("./callback3.js");

const getInfo=(boards, list, card)=>{
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
              let tempData = [];
              tempData.push(data);
              tempData.forEach((tempDataID) =>
                getListBelongToBoard(tempDataID.id, list, (err, data) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(data);
                    let names = ["Mind", "Space"];
                    names.forEach((name) => {
                      data.forEach((listdata) => {
                        getCardsUsingListID(listdata.id, card, (err, data) => {
                          if (err) {
                            console.log(err);
                          } else {
                            data.forEach((listdata) => {
                              console.log(listdata);
                            });
                          }
                        });
                      });
                    });
                  }
                })
              ); 
            }
          });
        }
      });
    });
  };

module.exports=getInfo;