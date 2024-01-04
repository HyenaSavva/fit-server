require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./src/routes/api");
const cookieParser = require("cookie-parser");
const { corsEnableMiddleware } = require("./src/middleware/auth.middleware");
const corsOptions = require("./src/config/cors-options");
const { sequelize } = require("./db");

const PORT = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(corsEnableMiddleware);

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

app.listen(PORT, async () => {
  await sequelize
    .sync()
    .then(() => {
      console.log(`Port ${PORT}. Synced database.`);
    })
    .catch((error) => {
      console.log("Failed to sync db: " + error.message);
    });
});
