import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

var users = [];

router.get("/", (req, res) => {
  if (users.length === 0) {
    res.send(`User is empty`);
  } else {
    res.send(users);
  }
});

router.post("/", (req, res) => {
  var user = req.body;
  const uid = uuidv4();

  users.push({ ...user, id: uid });
  res.send(`${user.first_name} has been added to the Database with ID: ${uid}`);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const foundUser = await users.find((user) => user.id === id);

    if (!foundUser) {
      throw new Error(`Can not find user with ID: ${id}`);
    }

    res.send(foundUser);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const index = users.find((user) => user.id === id);

    if (index === undefined) {
      throw new Error(`ID: ${id} can not find in database`);
    }

    users.splice(index, 1);
    res.send(`ID: ${id} has been deleted in database`);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, age, email } = req.body;

  try {
    const user = users.find((user) => user.id === id);

    if (user === undefined) {
      throw new Error(`ID: ${id} can not find in database`);
    } else {
      if (first_name) user.first_name = first_name;
      if (last_name) user.last_name = last_name;
      if (age) user.age = age;
      if (email) user.email = email;

      res.send(`User with the ${id} has been updated`);
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
