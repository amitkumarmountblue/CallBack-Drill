const list=require("../Data/lists.json");
const getListBelongToBoard = require("../callback2.js");

const callback = (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
};

getListBelongToBoard("mcu453ed", list, callback);
getListBelongToBoard("abc122dc", list, callback);
getListBelongToBoard("xyz", list, callback);
