const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const path = require("path");
const cors = require("cors");
const subjects = require("./routes/subjects");
const topics = require("./routes/topics");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

// CORS
app.use(cors());

// ROUTES
app.use("/api/subjects", subjects);
app.use("/api/topic", topics);

app.listen(PORT, () => console.log("This is listening on PORT: " + PORT));
