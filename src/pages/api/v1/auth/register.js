import dbConnect from "../../db/lib/db";
import User from "../../db/lib/model/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { name, email, password, phone } = req.body; //  all data comes in req.body from frontend
  switch (method) {
    case "POST":
      try {
        const plainPassword = req.body.password;
        let hashedPassword = await bcrypt.hash(plainPassword, 10);
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exist" });
        }
        const user = await User.create({
          email: email,
          mobile: phone,
          password: hashedPassword,
          name: name,
        });
        res
          .status(201)
          .json({ success: true, message: "Successfully register" });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: "User Creation failed" });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, data: {}, message: "User not created" });
      break;
  }
};
