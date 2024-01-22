const express = require("express");
const cors = require("cors");

const app = express();

const ACCEPT_WEB = ["https://dashboard-ten-plum.vercel.app"];

app.use(
	cors({
		origin: ACCEPT_WEB,
		methods: "GET",
	}),
);

app.get("/api", async (req, res) => {
	const { url } = req.query;

	try {
		fetch(url)
			.then((j) => j.text())
			.then((data) => {
				const title = data.match(/<title>(.*?)<\/title>/i);
				const favicon = data.match(/<link rel="icon" href="(.*?)"/i);

				res.json({
					title: title,
					favicon,
				});
			});
	} catch (error) {}
});

app.listen(process.env.PORT ?? 3000);
