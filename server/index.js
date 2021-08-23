require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const morgan = require("morgan");
const recipe = require("./routes/auth");
const userRoutes = require("./routes/users.js");

app.use(express.json());
app.use(morgan("dev"));

app.use(cors());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
