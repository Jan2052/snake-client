const net = require("net")
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.103",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data)
  });

  conn.on("connect", () => {
    conn.write("Name: JAN")
    console.log("Successfully connected to game server")
    setInterval(() => {
      conn.write("Move: up")
      conn.write("Move: left")
    }, 1000);
  });

  return conn;

};

module.exports = connect;
