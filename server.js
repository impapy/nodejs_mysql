require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const userRoute = require("./routes/users.router.js");
const notetypeentityRoute = require("./routes/notetypeentity.router.js");
const noteentityRoute = require("./routes/noteentity.router.js");

app.use("/user", userRoute);
app.use("/notetypeentity", notetypeentityRoute);
app.use("/noteentity", noteentityRoute);

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "something wrong",
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server listen on http://localhost:${process.env.PORT}`);
});
