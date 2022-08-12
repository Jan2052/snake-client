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

const handleUserInput = function (key) {
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
  if (key === 'e') {
    conn.write("Say: Coming through!")
  }
};

module.exports = { setupInput };
