import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  addComment,
  getComments,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

//here adding the comment route
router.patch("/:id/comment", addComment);
router.get("/:id/comments", getComments);

export default router;
