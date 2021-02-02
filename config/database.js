const mongoose = require('mongoose')
// process.env.MONGODB_URI,

mongoose.connect('mongodb+srv://lucaschachazo:123321@cluster0.dxdvd.mongodb.net/mytineray?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
})

.then(respuesta=>console.log("Database conected"))
.catch(error=> console.log(error))