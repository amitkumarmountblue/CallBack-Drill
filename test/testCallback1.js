const boards=require("../Data/boards.json");
const getBoardInfo = require("../callback1.js");

getBoardInfo("mcu453ed", boards).then(data=>console.log(data)).catch(error=>console.log(error));
getBoardInfo("abc122dc", boards).then(data=>console.log(data)).catch(error=>console.log(error));
getBoardInfo("xyz", boards).then(data=>console.log(data)).catch(error=>console.log(error));