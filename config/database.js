const mongoose = require("mongoose")

const connectDb = async () => {
    const dbUrl = "mongodb+srv://apalaciosleo:DaTaBaSeUoC01@cluster0.orl3fqb.mongodb.net/"

    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    mongoose.connect(dbUrl, connectionParams).then(()=>{
        console.info("Connected to the DB");
    })
    .catch((e) => {
        console.log("Error", e);
    });
}

module.exports = { connectDb };