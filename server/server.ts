const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const path = require("path");
const cors = require("cors");
const auth = require("./routes/auth");
const user = require("./routes/user");
const subjects = require("./routes/subjects");
const topics = require("./routes/topics");
const quiz = require("./routes/quiz");
const note = require("./routes/note");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

// CORS
app.use(cors());

// ROUTES
app.use("/api/auth", auth);
app.use("/api/users", user);
app.use("/api/subjects", subjects);
app.use("/api/topics", topics);
app.use("/api/quiz", quiz);
app.use("api/note", note);

app.listen(PORT, () => console.log("This is listening on PORT: " + PORT));
