console.log("Running!");


const { exec } = require("child_process");
const path = require("path");


const scriptPath = path.join(__dirname, "script.js");
const command = `node ${scriptPath}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing script: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Script error: ${stderr}`);
    return;
  }
  console.log(`Script output: ${stdout}`);
})