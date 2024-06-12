// Import block
import express from "express";
import cors from "cors";
import router from "./Routers/userRouter.js";

// Declaration
const app = express();
const PORT = 4000;

// Middlewares
app.use(express.json()); // Use express.json() to enable JSON body parsing
app.use(
  cors({
    origin: "https://hall-booking-7bjp.onrender.com",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api", router);
app.use("/", (req, res) => {
  res.status(200).send("Hi, Welcome to my World!");
});

// PORT
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
