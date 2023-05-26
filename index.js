const express = require('express');
const urlRoute = require('./routes/url')
const app = express();


app.use("/url",urlRoute)

app.listen(3000, () => {
    console.log("App is Listening on Port 3000!!!")
})