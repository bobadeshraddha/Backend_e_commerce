const userModel = require("../model/users");
var jwt = require('jsonwebtoken');
var bcrypt = require("bcrypt");

//creating a new user
async function registeruser(req, res) {
  const { name, address, phone, password } = req.body;
   
   var saltRounds = 10;
   var hashpassword = await bcrypt.hash(password,saltRounds)

  try {
  const newuser = await userModel({ name, address, phone, password:hashpassword });
    newuser.save();

    res.status(201).json({
      status: 1,
      message: "user registered successfully",newuser
    });
  } catch (error) {
    res.status(500).json({ message: "something went wrong ",error });
  }
}

async function loginUser(req, res) {
  const { phone, password } = req.body;
  try {
    const user = await userModel.findOne({ phone });
    if (!user) {
      return res
        .status(404)
        .json({
          message:
            "User not found with this number please enter valid mobile number ",
        });
    }
    const decryptPassword = await bcrypt.compare(password, user.password);
    console.log(decryptPassword);
    console.log(user.password);

    if (decryptPassword) {
      var token = jwt.sign(
        {
          id: user._id,
          phone: user.phone,
        },
        "privatekey",
        { expiresIn: "365d" }
      );

      return res.status(200).json({
        message: "user found successfully",
        user,
        token,
      });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getAlluser(req, res) {

  try {

    var Alluser = await userModel.find();

  res.status(201).json({
  message : "add successfully ",Alluser
  });

  } catch (error) {
    res.status(500).json({ message: "something went wrong ",error });
  }
}


module.exports = {
    registeruser,
    loginUser,
    getAlluser
}

