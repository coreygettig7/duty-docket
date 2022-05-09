const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/duty-docket', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false
});

module.exports = mongoose.connection;