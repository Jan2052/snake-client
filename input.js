// const { connect } = require("./client");
// Stores the active TCP connection object.
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {

    //\u0003 sets up ctrl c to exit?
    process.stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        conn.write("Move: up")
        conn.write("Say: Going up")
      }
      if (key === 'a') {
        conn.write("Move: left")
      }
      if (key === 's') {
        conn.write("Move: down")
      }
      if (key === 'd') {
        conn.write("Move: right")
        conn.write("Say: Right away!")
      }
      // setInterval(() => {
      //   conn.write("Say: Gobble gobble")
      // }, 5000);
    })

};

module.exports = { setupInput };
