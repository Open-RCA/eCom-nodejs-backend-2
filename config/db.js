const mongoose = require("mongoose")

const connectedDB = async () => {
  const connection = await mongoose.connect(process.env.MONGDB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log(`Db is connected at: ${connection.connection.host}`)
}

module.exports = connectedDB
