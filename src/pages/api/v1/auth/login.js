// api/v1/auth/login

// 1, ui for login page
// 2, validation for login form
// 3, api calling in form submission, passing login data from ui to backend api

// BACKEND
// 4, receive data in api
// 5, Check for the user is registerd already,
//          - if not registerd, return a response with message
//          - if  registerd, check for password is same ( password in req.body === password in database)
//          - if  registerd, but password is incorrect, return a response with a message password is incorrect check for password is same ( password in req.body === password in database)
// 6, create a jwt token
// 7, return a response with token

// export default function handler(req, res) {
//    const { method } = req

//    switch(method){
//     case "GET":

//     default:
//     return res.status(400).json({ message:"METHOD NOT ALLOWED"})
//    }
//   }

import dbConnect from "../../db/lib/db";
import User from "../../db/lib/model/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { email, password } = req.body;

  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({ email: email });
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ userId: user._id }, "secretKey");


        

        res.status(200).json({ success: true, message: "Login successful", token: token });



      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, message: "Invalid request method" });
      break;
  }
};
