const express= require("express");

const rateLimit = require("express-rate-limiter");
const app = express();

// Creating a limiter by calling rateLimit function with options:
// max contains the maximum number of request and windowMs
// contains the time in millisecond so only max amount of
// request can be made in windowMS time.

const limiter = rateLimit({
max: 200,
windowMs: 60 * 60 *1000,
message: "Too many request from this IP"
});

app.use(limiter);

app.get("/", (req,res) =>{
    res.status(200).json({
        status: "Success",
        message: "Hello from this server"
    });
});

const port = 8000;
app.listen(port,()=>{
    onslotchange.log(`App is running on port ${port}`);
});
