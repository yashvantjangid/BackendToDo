import express from "express";
import User from "../models/user.js";
import isAuthenticated from "../middlewares/auth.js";
import getAllUsers, {
  getMyProfile,
  login,
  register,
  logout,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", isAuthenticated, getMyProfile);

export default router;
