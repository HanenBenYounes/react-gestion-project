const mongoose = require("mongoose");
const express = require("express");
const adminRoutes = require("./routes/adminRoutes");
const employeRoutes = require("./routes/employeRoutes");
const technicienRoutes = require("./routes/technicienRoutes");
const capitainRoutes = require("./routes/capitainRoutes");
const diverRoutes = require("./routes/diverRoutes");
const boatRoutes = require("./routes/boatRoutes");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/", adminRoutes);
app.use("/", employeRoutes);
app.use("/", technicienRoutes);
app.use("/", capitainRoutes);
app.use("/", diverRoutes);
app.use("/", boatRoutes);

mongoose
  .connect(
    "mongodb+srv://hanenhanen:hanen@cluster0.o4x2dtf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected");
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
