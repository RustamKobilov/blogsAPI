import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const a=4;
    if(a>5){
res.send('OK!')
    }else {
        res.send('Hello World1 man!!!')
    }
    })
app.get('/users', (req, res) => {
    res.send('Hello Man update1!')
})
app.post('/users', (req, res) => {
    res.send('New Man!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})