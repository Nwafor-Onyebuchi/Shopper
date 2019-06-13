const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');
const path = require('path');

const items = require('./routes/api/items')

const app = express();

//bodyParser Middleware
app.use(bodyParser.json());
//app.use(cors());



// DB config
const db = require('./config/keys');

//Connect to Mongose
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


//Use Routes
app.use('/api/items', items);

if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));