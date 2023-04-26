const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const eventRoutes = require("./event-routes");
const handleHomescreenRoutes = require("./handle-homescreen");

const app = express();
const PORT = 8080;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", eventRoutes);
app.use("/api", handleHomescreenRoutes);

// Serve static files from the 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB
const MONGODB_URI =
  "mongodb+srv://Matas:r8ceEfaZL7PH9Uu4@eitherwhere.z1bjudp.mongodb.net/Events?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB successfully!");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
