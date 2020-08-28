const express = require("express");
const router = express.Router();


//Load input Validation
const validateLoginInput = require("../../validation/login");
const validateRegistorInput = require("../../validation/register");

//Load user Model
const UserHack = require("../../models/User");

//@Route  GET   /api/users/test
//@desc     Test users route
//@access    public
router.get("/test", (req, res) => res.json({ msg: "user All ok" }));

//@Route  POST   /api/users/register
//@desc     Test users route
//@access    public

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegistorInput(req.body);

  //Check for erors
  if (!isValid) {
    return res.status(400).json(errors);
  }

  UserHack.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email already exist";
      return res.status(400).json(errors);
    } else {

      const newUser = new UserHack({
        email: req.body.email,
        password: req.body.password,
        app:req.body.app
      });

      newUser.save().then((user) => res.json(user))
      .catch((err) => console.log(err));

    }
  });
});

//@Route  POST   /api/users/login
//@desc     Test users route
//@access    public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  UserHack.findOne({ email })
    .then((user) => {
      //check for user
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }

      if(password === user.password){
        res.json({
          success: true,
        })
      }else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
     
    })
    .catch((err) => console.log(err));
});

//@Route  GET   /api/users/current
//@desc     get current user
//@access    private

module.exports = router;
