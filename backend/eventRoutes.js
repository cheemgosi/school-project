const express = require("express");
const multer = require("multer");
const { Event } = require("./models");

const router = express.Router();

router.post("/event", async (req, res) => {
  const upload = multer().fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "eventData", maxCount: 1 },
  ]);

  upload(req, res, async (err) => {
    if (err) {
      console.error("Error uploading file:", err);
      res.status(500).send("Error uploading file");
      return;
    }

    try {
      const eventData = JSON.parse(req.body.eventData);
      const thumbnail = req.files.thumbnail[0].buffer;

      // Save event data and thumbnail to the database
      const event = new Event({ ...eventData, thumbnail });
      const savedEvent = await event.save();

      // Remove thumbnail from the saved event object
      const savedEventWithoutThumbnail = savedEvent.toObject();
      delete savedEventWithoutThumbnail.thumbnail;

      // Log the saved event without thumbnail to the console
      console.log("Event saved to the database:", savedEventWithoutThumbnail);

      res.status(201).send("Event created successfully");
    } catch (err) {
      console.error("Error saving event to database:", err);
      res.status(500).send("Error saving event to database");
    }
  });
});

module.exports = router;
