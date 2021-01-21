// Levantar Servidor-------------------
const router = require('./routes/index')

const express = require('express')
const cors = require ('cors')

 app.use = express()


app.use(cors())

app.use('/api', router)

app.listen(4000, () => console.log ('Estoy escuchando el puerto 4000'))
// ---------------------------------------------------------------------