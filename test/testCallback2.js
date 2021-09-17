const list=require("../Data/lists.json");
const getListBelongToBoard = require("../callback2.js");


getListBelongToBoard("mcu453ed", list).then(data=>console.log(data)).catch(error=>console.log(error));
getListBelongToBoard("abc122dc", list).then(data=>console.log(data)).catch(error=>console.log(error));
getListBelongToBoard("xyz", list).then(data=>console.log(data)).catch(error=>console.log(error));
