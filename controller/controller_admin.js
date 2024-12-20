const adminModel = require("../model/admin");
var jwt = require('jsonwebtoken');
var bcrypt = require("bcrypt");

//creating a new admin
async function registeruser(req, res) {
  const { name, address, contact, password } = req.body;
  const saltRounds = 10;

    var hashpassword = await bcrypt.hash(password,saltRounds)

  try {
  const newadmin = await adminModel({ name, address, contact, password:hashpassword });
  newadmin.save();

    res.status(201).json({      
      status: 1,
      message: "admin registered successfully",newadmin
    });
  } catch (error) {
    res.status(500).json({ message: "something went wrong ",error });
  }
}

async function loginUser(req, res) {
  const { name, password } = req.body;
  try {
    const admin = await adminModel.findOne({ name });
    if (!admin) {
      return res
        .status(404)
        .json({
          message:
            "User not found with this number please enter valid mobile number ",
        });
    }
    const decryptPassword = await bcrypt.compare(password, admin.password);
    console.log(decryptPassword);
    console.log(admin.password);

    if (decryptPassword) {
      var token = jwt.sign(
        {
          id: admin._id,
          phone: admin.phone,role:"admin"
        },
        "privatekey",
        { expiresIn: "365d" }
      );

      return res.status(200).json({
        message: "admin found successfully",
        admin,
        token,
      });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}


module.exports = {
    registeruser,
    loginUser,
}

