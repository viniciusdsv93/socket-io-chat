import express from "express";
import path from "path";

export class App {
	private readonly express: express.Application;
	private readonly PORT = process.env.PORT || 3001;

	constructor() {
		this.express = express();
		this.setStaticFolder();
		this.listen();
	}

	private setStaticFolder() {
		this.express.use(
			express.static(path.join(__dirname, "..", "..", "..", "public"))
		);
	}

	private listen() {
		this.express.listen(this.PORT, () => {
			console.log(`Server running on http://localhost:${this.PORT}`);
		});
	}
}
