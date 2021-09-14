const path = require("path");
const board = require(path.join(__dirname, "../Data/boards.json"));
const list = require(path.join(__dirname, "../Data/lists.json"));
const card = require(path.join(__dirname, "../Data/cards.json"));
const { getInfo } = require("../callback4.js");

getInfo(board, list, card);

