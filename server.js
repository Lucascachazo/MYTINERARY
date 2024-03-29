require ('dotenv').config()

require('./config/database')
const express = require('express')
const cors = require ('cors')
const router = require ('./routes/index')

require('./config/database')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(4000, () => console.log ('Estoy escuchando el puerto 4000'))
