import express from "express";
import bodyParser from "body-parser";
import routes from "./user/user.js";
import homepage from "./homepage/homepage.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", routes);
app.use("/home", homepage);
// app.use(express.static('homepage'));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}/home`)
);
