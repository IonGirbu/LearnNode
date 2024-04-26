require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { userRoutes } = require("./routes/index");
// import { userRoutes } from "./routes/index";

// routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
