let express = require("express");
let app = express();
const { Socket } = require("socket.io");

require("./dbConnection");
let router = require("./routers/router");

let port = process.env.port || 3000;
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/cat", router);

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  setInterval(() => {
    x = parseInt(Math.random() * 10);
    socket.emit("number", x);
    console.log("Emmiting number " + x);
  }, 1000);
});

http.listen(port, () => {
  console.log("Server started");
});
