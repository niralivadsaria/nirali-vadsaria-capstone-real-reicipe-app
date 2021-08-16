const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

const recipe = require("./routes/recipe");

// app.use(express.json());

// app.use(cors());

// app.use("/recipe", recipe);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
