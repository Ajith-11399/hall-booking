// Import Block
import express from "express";

// Declaration
const app = express();
const PORT = 4000;

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send(`<div><h4 style="text-align:center;">The app is running sommthly</h4></div>`);
});

// PORT
app.listen(PORT, ()=> {
    console.log(`App is running on Port : ${PORT} successfully`);
})