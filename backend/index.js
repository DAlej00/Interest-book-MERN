require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 9090;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  credentials: true, origin: ['http://localhost:3000', 'https://qa-proyecto-frontend.vercel.app', 'https://qa-proyecto-frontend-diego-acajabons-projects.vercel.app', 'https://qa-proyecto-frontend-git-main-diego-acajabons-projects.vercel.app']
}));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_SERVER)
  .catch((error) =>
  {
    console.error("DB connection error:", error);
  });

app.listen(PORT, () =>
{
  console.log("\nServer is Running...");
});

app.get('/', (req, res) =>
{
  res.send("Server Status: Running...");
});


////////////////////////     ALL MAIN ROUTES ARE BELOW      //////////////////////


//for handling Users
app.use('/api/user', require('./routes/user'));

//for handling Customer
app.use('/api/customer', require('./routes/customer'));
