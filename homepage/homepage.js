import express from "express";

const HOMEPAGE = express();

HOMEPAGE.get("/home", (req, res) => {
  try {
    res.send("HELLO FROM HOMEPAGE");
  } catch (error) {
    res.status(500);
  }
});
export default HOMEPAGE;
