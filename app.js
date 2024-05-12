
// server.mjs
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from"mongoose";
import session from 'express-session';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';


import homepage_router from "./routes/homepage.js";
import signup_router from "./routes/signup.js";
import user_router from "./routes/user_router.js";
import courses_router from "./routes/Resource.js";
import admin_router from "./routes/admin_router.js";

// Load environment variables from .env file
dotenv.config();

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(session({ secret: 'Your_Secret_Key' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

//database
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // Assuming you're using the EJS view engine


app.use('/', homepage_router);
app.use('/',signup_router);
app.use('/',user_router);
app.use('/',courses_router);
app.use('/',admin_router);


  





mongoose.connect(`mongodb+srv://alsaead2110679:${process.env.PASSWORD}@cluster0.vnvsld0.mongodb.net/`)
.then(()=>{

    console.log(`mongoo app listening on port ${process.env.PORT}`)
  })
.catch((error)=>{
    console.log("there is error")
  console.log(error)
})

app.listen(PORT, () => {
  console.log(`Server is listening on http://${hostname}:${PORT}`);
});

export default app;
