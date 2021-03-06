const fs = require("fs");
const path = require("path");
const config = require("../config/twitter");
const t = require("../database/phrases.json")
const Twit = require("twit");
const T = new Twit(config);

function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getPhrase() {
	const phrases = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/phrases.json")));

	return phrases[randomNumber(0, phrases.length)];
}

exports.demotivate = () => {
	try {
		const phrase = getPhrase();

		T.post("statuses/update", { status: phrase.message }, (err, data, response) => {
			if (err) throw err;
		});
		console.log("Desmotivação efetuada!");
	} catch (error) {
		console.error(error);
	}
};

exports.testDemotivate = () => {
	try {
		console.log("");
		console.log("---- BOT ESCREVENDO ----");
		const phrase = getPhrase();

		console.log("---- BOT ENVIANDO ----");

    console.log("---- BOT TWITOU ----");
		console.log("");
	} catch (error) {
		console.error(error);
	}
};
