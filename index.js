const express = require('express');
const {connectToMongoDB} = require("./connect")
const urlRoute = require('./routes/url')


const app = express();

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=>console.log("Mongodb connected"))

app.use(express.json());


app.use("/url",urlRoute)

app.listen(3000, () => {
    console.log("App is Listening on Port 3000!!!")
})