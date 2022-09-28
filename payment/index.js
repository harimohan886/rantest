const express = require("express");
const app = express();
//const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();

// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log("DB Connection Successfull!"))
//     .catch((err) => {
//         console.log(err);
//     });

app.use(cors());
app.use(express.json());

app.get('/list', (req, res) => res.send("In payment list"));

app.get('/', (req, res) => res.send("In payment info page"));


app.listen(process.env.PORT || 5002, () => {
    console.log("Hotel server is running on port! ", process.env.PORT);
});
