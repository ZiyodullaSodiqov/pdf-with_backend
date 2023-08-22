const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ziyodullasodiqov2007:HvVKAbFXxkST37nt@cluster0.heagvwv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDBga ulanish hosil qilindi...');
    })
    .catch((err) => {
        console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
    });
mongoose.set('useFindAndModify', false);
app.use(express.json());

app.use('/api/todo', require('./routes/auth'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`${port}chi portni eshitishni boshladim...`);
});

//HvVKAbFXxkST37nt