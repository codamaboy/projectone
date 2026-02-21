const io = require("socket.io")(3002, { cors: { origin: "*" } });
io.on("connection", socket => {
  socket.on("event", data => io.emit("update", data));
});
