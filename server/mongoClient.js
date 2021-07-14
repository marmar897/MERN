//import mongoose
const mongoose = require('mongoose');

module.exports = {
    connectToServer: (callback) => {
        //establish connection to database
        mongoose.connect(
            process.env.DB_Connection,
            { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
            (err) => {
                if (err) return console.log("Error: ", err);
                console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
                return callback(err);
            }
        );
    },

    getDB : () =>{
        return mongoose;
    }
}