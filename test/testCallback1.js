const boards=require("../Data/boards.json");
const getBoardInfo = require("../callback1.js");

const callback=(error,data)=>{
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}

getBoardInfo("mcu453ed", boards, callback);
getBoardInfo("abc122dc", boards, callback);
getBoardInfo("xyz", boards,callback);