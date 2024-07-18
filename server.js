const express = require('express')
const app = express()
 
app.post('/', (req, res) => {
  
  res.send('created')
})
app.post('/gokul', (req, res) => {
    res.send('anya')
  })
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})