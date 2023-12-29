import express from "express";
import {
  updateTask,
  getMyTask,
  newTask,
  deleteTask,
} from "../controllers/task.js";
import isAuthenticated from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.post("/mytask", isAuthenticated, getMyTask);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
