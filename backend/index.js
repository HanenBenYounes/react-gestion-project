const mongoose = require ('mongoose')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose.connect('mongodb+srv://hanenhanen:hanen@cluster0.o4x2dtf.mongodb.net/?retryWrites=true&w=majority').then(()=>{
  console.log("DB Connected")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})