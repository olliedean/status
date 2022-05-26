var CronJob = require('cron').CronJob;
const ping = require("ping");
const Logger = require("@ptkdev/logger");
const logger = new Logger();
const sqlite3 = require('sqlite3').verbose();

var loadedServices = [];

logger.info("Initializing database...", "INIT");
const db = new sqlite3.Database('db.sqlite3', (err) => {
	if (err) {
		logger.error("Error initializing database: " + err, "INIT");
		return;
	}
	logger.info("Database initialized.", "INIT");
});



function get_services() {
	return new Promise((resolve, reject) => {
		db.all("SELECT * FROM services", (err, rows) => {
			if (err) {
				logger.error("Error getting servers: " + err, "INIT");
				reject(err);
				return;
			}
			resolve(rows);
		});
	});
}

get_services().then((services) => {
	logger.info("Found " + services.length + " services.", "INIT");
	services.forEach((service) => {
		logger.info("Starting service '" + service.name + "'...", "INIT");
		loadedServices.push(service);
	});
	logger.info("All services started.", "INIT");
	console.log(" ");
	logger.sponsor("Sponsor me on patreon!");
	logger.sponsor("https://www.patreon.com/olliedean");
	console.log(" ");
	console.log(loadedServices);

	require('child_process').fork('ejs/bin/www');
});

var job = new CronJob(
	'* * * * *',
	async function() {
		loadedServices.forEach(async (service) => {
			const result = await ping.promise.probe(service.host, {
				timeout: 10,
				extra: ["-i", "3"],
			});
			if(result.alive) {
				logger.info(`${result.host} (${service.name}) is up! (${result.time}ms)`);
			} else {
				logger.error(`${result.inputHost} (${service.name}) is unreachable!`);
			}
	
			db.run("INSERT INTO pings (service_id, alive, avg_ping, pinged_at) VALUES (?, ?, ?, ?)", [service.id, result.alive, result.avg, Date.now()], (err) => {
				if (err) {
					logger.error("Error inserting ping record: " + err, "INIT");
					return;
				}
			});
		});

	},
	null,
	true,
	'Europe/London'
);