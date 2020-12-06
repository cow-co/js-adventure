const express = require("express");
const router = express.Router();

router.get("/monster/:id", async (req, res) => {
  let responseJSON = { aircraft: [], errors: [] };
  let returnStatus = statusCodes.SUCCESS;

  try {
    responseJSON.aircraft = await aircraftMethods.getAllAircraft();
  } catch (error) {
    console.error(error.message);
    returnStatus = statusCodes.SERVER_ERROR;
    responseJSON.errors.push("Server-side error");
  }

  return res.status(returnStatus).json(responseJSON);
});

router.post("/action", async (req, res) => {
  let responseJSON = { aircraft: null, errors: [] };
  let returnStatus = statusCodes.SUCCESS;

  try {
    responseJSON.aircraft = await aircraftMethods.findAircraftByName(req.params.aircraftName);
  } catch (error) {
    console.error(error.message);
    returnStatus = statusCodes.SERVER_ERROR;
    responseJSON.errors.push("Server-side error");
  }

  return res.status(returnStatus).json(responseJSON);
});

module.exports = router;
