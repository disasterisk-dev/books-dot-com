const express = require("express");
const cors = require("cors");
require("dotenv").config();

//express app

const app = express();
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/user");

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);

    next();
});

//routes

app.use("/api/books", bookRoutes);
app.use("/api/user", userRoutes);

//connect to DB

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to MongoDB, listening on port 4000");
        });
    })
    .catch((err) => {
        console.log(err);
    });
