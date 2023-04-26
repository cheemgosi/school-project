const mongoose = require("mongoose");

// Define the Event schema
const eventSchema = new mongoose.Schema({
  eventName: String,
  artists: [String],
  artistsDescription: String,
  venueName: String,
  address: String,
  startTime: Date,
  endTime: Date,
  eventLength: Number,
  eventDescription: String,
  price: Number,
  tickets: String,
  tags: [String],
  contactInfo: String,
  thumbnailUrl: String,
  creationDate: Date,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
