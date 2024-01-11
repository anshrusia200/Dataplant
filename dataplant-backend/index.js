const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const bodyParser = require("body-parser");
const PORT = 5000;
const path = require("path");
const cors = require("cors");
const node_env = "dev";
const router = express.Router();
const Schedule = require("../models/Schedule");
app.use(
  cors({
    origin: [/netlify\.app$/, /localhost:\d{4}$/],
  })
);
connectDB();

app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// app.use("/", require("./routes/schedules"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.post("/schedules", async (req, res) => {
  try {
    const newSchedule = new Schedule({
      title: req.body.title,
      description: req.body.description,
      subject: req.body.subject,
      frequency: req.body.frequency,
      repeat: req.body.repeat,
      time: req.body.time,
    });
    const schedule = await newSchedule.save();
    res.send(schedule);
  } catch (error) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

if (node_env === "production") {
  const __directory = path.resolve();
  app.use(express.static(path.join(__directory, "/dataplant-frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__directory, "dataplant-frontend", "dist", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("API service running 🚀");
  });
}
