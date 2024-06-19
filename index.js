import express from "express";
import bodyParser from "body-parser";
import Routes from "./user/user.js";
import homepage from "./homepage/homepage.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", Routes);
app.use("/", homepage);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
