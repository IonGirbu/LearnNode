const router = require("express").Router();

// register user
router.post("/register", (req, res) => {
  const user = { id: 1, name: "Test", email: "test@email.com" };
  res.json(user);
});

// login user
router.post("/login", (req, res) => {
  const user = { id: 1, name: "Test", email: "test@email.com" };
  res.json(user);
});

// get user
router.get("/me", (req, res) => {
  const user = { id: 1, name: "Test", email: "test@email.com" };
  res.json(user);
});

module.exports = router;
