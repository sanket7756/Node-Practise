const fs = require("fs");

let fileBufferData = fs.readFileSync('1_json.json');
let fileStringData = fileBufferData.toString();

let parsedFileData = JSON.parse(fileStringData);
parsedFileData.name = "Sanket";
parsedFileData.age = 25;
let stringifiedData = JSON.stringify(parsedFileData);


fs.writeFileSync('1_json.json',stringifiedData);