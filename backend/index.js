const mongoose = require("mongoose");
const express = require("express");
const adminRoutres = require("./routes/adminRoutes");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/", adminRoutres);

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
