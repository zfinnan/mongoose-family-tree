const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false }));

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');

//  shortcut to the mongoose connection
const db = mongoose.connection;

db.once('open', () => {
    // pringting to see what host and port MongoDb is on
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
})

// log any database errors
db.on('error', (err) => {
    console.error(`Database error: ${err}`)
})

app.get('/', (req, res) => {
    res.send('Mongoose');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})