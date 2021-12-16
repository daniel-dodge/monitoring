const express = require('express')
const path = require('path')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '18a8999681774bb49d5b0708791bd38a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

let students = []

const app = express()
// app.use(express.json)



rollbar.log('Hello world!')
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file loaded successfully')
})

app.post('/api/student', (req,res)=>{
    let {name} = req.body
    name = name.trim()

    students.push(name)

    rollbar.log("Student added successfully", {author: "Scott", type:"manual"})
})
app.use(rollbar.errorHandler())
const port = process.env.PORT || 4545
app.listen(port, () => console.log(`we on ${port} ayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy`))