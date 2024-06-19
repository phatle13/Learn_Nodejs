import express from "express";

const HOMEPAGE = express();

HOMEPAGE.get("/", (req, res) => {
  res.send("HELLO FROM HOMEPAGE");
});

export default HOMEPAGE;
