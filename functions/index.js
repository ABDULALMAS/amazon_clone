
const functions = require("firebase-functions");
// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51NU571SCeUd31r4peH7tGQJlj9HCb8WXszWtWWGBgStZQgy2b7LN4J9bjrV7Agx3fkdWVJfJRwUMI3PplYDCggri00Ec12Nzb4"
    );

    


    const app = express();

app.use(cors({orign: true}));
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });

app.get("/", (request,response) => response.status(200).send("Hello World"));
app.post("/payments/create",async (request,response) =>{
    const total = request.query.total;

console.log("Payment Request received!!!! for amount", total );
    const paymentIntent = await stripe.paymentIntents.create({
       amount: total,
       currency: "INR",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);
