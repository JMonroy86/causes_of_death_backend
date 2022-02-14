const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const db = require("./app/models");
db.sequelize.sync();
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Causes of death API has been initiated" });
});

require("./app/routes/causes/causes.routes")(app);
require("./app/routes/search/search.routes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});