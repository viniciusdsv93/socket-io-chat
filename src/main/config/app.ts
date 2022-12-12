import express from "express";
import path from "path";
import http from "http";
import { Server } from "socket.io";

export class App {
	private readonly express: express.Application;
	private readonly PORT = process.env.PORT || 3001;
	private readonly server: http.Server;
	private readonly io;

	constructor() {
		this.express = express();
		this.server = http.createServer(this.express);
		this.io = new Server(this.server);
		this.setupSocketIo();
		this.setStaticFolder();
		this.listen();
	}

	private setStaticFolder() {
		this.express.use(
			express.static(path.join(__dirname, "..", "..", "..", "public"))
		);
	}

	private setupSocketIo() {
		this.io.on("connection", (socket) => {
			console.log("New WebSocket connection");
		});
	}

	private listen() {
		this.express.listen(this.PORT, () => {
			console.log(`Server running on http://localhost:${this.PORT}`);
		});
	}
}
