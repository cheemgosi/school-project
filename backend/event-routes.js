const express = require("express");
const multer = require("multer");
const path = require("path");
const { Event } = require("./models");

const router = express.Router();
const uploadFolder = "uploads";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueFilename = file.fieldname + "-" + Date.now() + ".jpg";
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

router.post("/event", async (req, res) => {
  const uploader = upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "eventData", maxCount: 1 },
  ]);

  uploader(req, res, async (err) => {
    if (err) {
      console.error("Error uploading file:", err);
      res.status(500).send("Error uploading file");
      return;
    }

    try {
      const eventData = JSON.parse(req.body.eventData);
      const thumbnailFile = req.files.thumbnail[0];

      // Save thumbnail to the server's file system
      const filePath = thumbnailFile.path;

      // Create the image URL
      const baseUrl = req.protocol + "://" + req.get("host");
      const thumbnailUrl = `${baseUrl}/${filePath}`;

      // Calculate event length
      const startTime = new Date(eventData.startTime);
      const endTime = new Date(eventData.endTime);
      const eventLength = (endTime - startTime) / 3600000; // Calculate the length in hours

      // Set creation date
      const creationDate = new Date();

      // Save event data, event length, creation date, and thumbnail URL to the database
      const event = new Event({
        ...eventData,
        eventLength,
        creationDate,
        thumbnailUrl,
      });
      const savedEvent = await event.save();

      // Log the saved event to the console
      console.log("Event saved to the database:", savedEvent);

      res.status(201).send("Event created successfully");
    } catch (err) {
      console.error("Error saving event to database:", err);
      res
        .status(500)
        .json({
          message: "Error saving event to database",
          error: err.message,
        });
    }
  });
});

module.exports = router;
