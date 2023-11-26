const fs = require("fs");
let text = fs.readFileSync("Installation", "utf-8");
let = text.replace("content","rohan");


console.log(text);

console.log("createing a new file...");
fs.writeFileSync("rohan.text", text);
