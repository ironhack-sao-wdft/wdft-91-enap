// const mongoose = require("mongoose")
import mongoose from "mongoose"

async function connect() {
    try {
        // esperando => await
        const dbConnection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`${dbConnection.connection.name} conectado com sucesso!`)
    } catch (error) {
        console.log('algo deu errado:', error)
    }
}

export default connect