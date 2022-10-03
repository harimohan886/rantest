const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const gateway = require("fast-gateway");

dotenv.config();


const corsOptions = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));



app.use(express.json());

const server = gateway({
    routes: [
        {
            prefix: "/newhotel",
            target: process.env.HOTEL_MICROSERVICE_URL,

        },
        {
            prefix: "/package",
            target: process.env.PACKAGE_MICROSERVICE_URL,

        },
        {
            prefix: "/safari",
            target: process.env.SAFARI_MICROSERVICE_URL,

        },
        {
            prefix: "/payment",
            target: process.env.PAYMENT_MICROSERVICE_URL,

        },
        {
            prefix: "/admin",
            target: process.env.ADMIN_MICROSERVICE_URL,

        },
        {
            prefix: "/chambal",
            target: process.env.CHAMBAL_MICROSERVICE_URL,

        },

    ]
});

server.get('/testing', (req, res) => res.send("yes test called"));


server.start(process.env.PORT || 5004).then(server => {
    console.log("API Gateway server is running on port! ", process.env.PORT);
});
