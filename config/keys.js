const MONGO_UN = encodeURIComponent(process.env.LOGBOOK_DB_USER);
const MONGO_PW = encodeURIComponent(process.env.LOGBOOK_DB_PW);

module.exports = {
  mongo_uri: `mongodb+srv://${MONGO_UN}:${MONGO_PW}@flight-sim-logbook.uy7mi.mongodb.net/flight-sim-logbook?retryWrites=true&w=majority`,
};
