const express = require("express");
const { Event } = require("./models");

const router = express.Router();

router.get("/events/newest", async (req, res) => {
  try {
    const events = await Event.find({})
      .sort({ creationDate: -1 }) // Sort events by creationDate in descending order (newest first)
      .limit(10) // Limit the results to the first 10 events
      .exec(); // Execute the query

    res.status(200).json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).send("Error fetching events");
  }
});

router.get("/events/upcoming", async (req, res) => {
  try {
    const currentDate = new Date();
    const upcomingEvents = await Event.find({
      startTime: { $gte: currentDate },
    })
      .sort({ startTime: 1 })
      .limit(10)
      .exec();

    res.status(200).json(upcomingEvents);
  } catch (err) {
    console.error("Error fetching upcoming events:", err);
    res.status(500).send("Error fetching upcoming events");
  }
});

router.get("/events/current", async (req, res) => {
  try {
    const currentDate = new Date();
    const currentEvents = await Event.find({
      startTime: { $lte: currentDate },
      endTime: { $gte: currentDate },
    }).exec();

    res.status(200).json(currentEvents);
  } catch (err) {
    console.error("Error fetching current events:", err);
    res.status(500).send("Error fetching current events");
  }
});

module.exports = router;
