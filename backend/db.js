const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hotel-reservation',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) => {
        console.log("database connected");
    }).catch((error) => {
        console.log("error connecting to database")
    });
