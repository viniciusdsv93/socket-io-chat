import express from "express";
const app = express();
import http from "http";
import path from "path";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "..", "..", "index.html"));
});

io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("chat message", (msg) => {
		io.emit("chat message", msg);
	});
});

export { server };
