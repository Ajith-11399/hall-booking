// Import Block
import express, { Router } from "express";
import {
  allRoomsData,
  allUserData,
  bookingRoom,
  countBookings,
  createRoom,
  getUSers,
} from "../Controllers/userController.js";

// Declaration
const router = express.Router();

// Routes
router.get("/users", getUSers);
router.post("/create-room", createRoom);
router.post("/book-room", bookingRoom);
router.get("/booked", allRoomsData);
router.get("/customers", allUserData);
router.get("/booking-count", countBookings);

// Export Block
export default router;
