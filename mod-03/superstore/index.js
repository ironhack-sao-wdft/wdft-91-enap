import express from 'express'
import * as dotenv from 'dotenv'
import dbConnection from './config/db.config.js'
import orderRouter from './routes/order.routes.js'
import productRouter from './routes/product.routes.js'

dotenv.config()

dbConnection()

const app = express()
app.use(express.json())

app.use('/orders', orderRouter)
app.use('/products', productRouter)

app.listen(Number(process.env.PORT), () => 
    console.log(`server is listening on PORT ${process.env.PORT}`))