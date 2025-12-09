const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./src/config/db');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.get('/',(req , res)=>{
    res.send("Book selling website backend is working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    `server running at ${PORT}`;
})

