import express from "express";
import {
  userLogOut,
  userRegister,
  userLogin,
} from "../routController/userroutController.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", userLogOut);

export default router;
