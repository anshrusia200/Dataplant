const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const bodyParser = require("body-parser");
const PORT = 5000;
const path = require("path");
const cors = require("cors");
const node_env = "production";
const router = express.Router();
const Schedule = require("./models/Schedule");
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
    console.log(error);
    res.status(500).send("Server Error");
  }
});
app.get("/schedules", async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.send(schedules);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.delete("/schedules/:id", async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const deletedSchedule = await Schedule.findOneAndDelete({
      _id: scheduleId,
    });
    const schedules = await Schedule.find();
    res.send(schedules);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
app.patch("/schedules/:id", async (req, res) => {
  try {
    const scheduleId = req.params.id;

    const existingSchedule = await Schedule.findById(scheduleId);

    if (!existingSchedule) {
      return res.status(404).send("Schedule not found");
    }

    if (req.body.title) existingSchedule.title = req.body.title;
    if (req.body.description)
      existingSchedule.description = req.body.description;
    if (req.body.subject) existingSchedule.subject = req.body.subject;
    if (req.body.frequency) existingSchedule.frequency = req.body.frequency;
    if (req.body.repeat) existingSchedule.repeat = req.body.repeat;
    if (req.body.time) existingSchedule.time = req.body.time;

    const updatedSchedule = await existingSchedule.save();
    const schedules = await Schedule.find();

    res.send(schedules);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// if (node_env === "production") {
//   const __directory = path.resolve();
//   app.use(express.static(path.join(__directory, "/dataplant-frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__directory, "dataplant-frontend", "dist", "index.html")
//     );
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API service running 🚀");
//   });
// }
