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
  eventDescription: String,
  price: Number,
  tickets: String,
  tags: [String],
  contactInfo: String,
  thumbnail: Buffer,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
