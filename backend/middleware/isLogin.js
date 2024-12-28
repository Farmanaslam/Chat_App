import jwt from "jsonwebtoken";
import User from "../Models/userModels.js";

const isLogin = (req, res, next) => {
  try {
    //console.log(req.cookies.jwt);
    
    const token = req.cookies.jwt;
    console.log(token);
    if (!token) {
      return res
        .status(500)
        .send({ success: false, message: "User unauthorized" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res
        .status(500)
        .send({ success: false, message: "User unauthorized- Invalid Token" });
    }
    const user = User.findById(decode.userId).select("-passward");
    if (!user) {
      return res
        .status(500)
        .send({ success: false, message: "User not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(`Error in IsLogin Middleware ${error.message}`);
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};
export default isLogin;
