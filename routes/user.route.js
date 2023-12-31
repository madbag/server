import express from "express";
import {
  getUser,
  update,
  deleteUser,
  follow,
  unfollow,
} from "../controllers/user.js";
import { verifyToken } from "../config/verifyToken.js";

const router = express.Router();

//Update User
router.put("/:id", update);
//Get User
router.get("/find/:id", getUser);
//  res.send("you are in user router doing a GET request");

//Delete User
router.delete("/:id", deleteUser);

//Follow
router.put("/follow/:id", verifyToken, follow);

//Unfollow
router.put("/unfollow/:id", verifyToken, unfollow);

export default router;
