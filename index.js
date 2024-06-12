// // Import lock
// import express from "express";
// import cors from "cors";
// import router from "./Routers/userRouter.js";

// // Declaration
// const app = express();
// const PORT = 4000;

// // Middlewares
// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:4000",
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// // Routes
// app.use("/api", router);
// app.use("/", (req, res) => {
//   res.status(200).json({ message: "Hi, Welcome to my World!" });
// });

// // PORT
// app.listen(PORT, () => {
//   console.log("Hi how are you");
// });


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
    origin: "http://localhost:4000",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api", router);
app.use("/", (req, res) => {
  res.status(200).json({ message: "Hi, Welcome to my World!" });
});

// PORT
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
