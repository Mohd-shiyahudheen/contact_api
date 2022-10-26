 const express = require('express')
 const config = require('./config/mongoDB')
//  const cors =require('cors')
 const userRouter = require('./routers/userRouter')


const app =express()
 app.use(express.json())
//  app.use(cors())


app.use('/user',userRouter)
 

 const PORT = 5000
app.listen(PORT, () => console.log(`Node.js server started on port ${PORT}`))