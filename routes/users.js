const express = require("express");
const router = express.Router();
const passport = require("passport");

const usersController = require("../controllers/usersController");
const { route } = require(".");

router.get("/profile", usersController.profile);

router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);

router.post("/create", usersController.create);

// use passport as a middleware to authenticate
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
  usersController.createSesition
);

module.exports = router;
