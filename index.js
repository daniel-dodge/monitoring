const express = require('express')
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: 'b39fae81537940fb8e1bcdbfe13e9e95',
    captureUncaught: true,
    captureUnhandledRejections: true,
})
const app = express()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file loaded successfully')
})
const port = process.env.PORT || 4545
app.listen(port, () => console.log(`we on ${port} ayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy`))