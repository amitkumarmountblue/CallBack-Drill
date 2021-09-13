const path = require("path");
const boards = require(path.join(__dirname,"../Data/boards.json")); 
const {getBoardInfo}  = require("../callback1.js");

getBoardInfo("mcu453ed", boards, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

getBoardInfo("abc122dc", boards, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });

  getBoardInfo("xyz", boards, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });