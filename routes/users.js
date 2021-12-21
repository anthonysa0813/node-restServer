const express = require("express");
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  patchUser,
} = require("../controllers/users");
const router = express.Router();

router.get("/", getUsers);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/", deleteUser);
router.patch("/", patchUser);

module.exports = router;
