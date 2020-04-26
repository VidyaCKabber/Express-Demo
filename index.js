const express = require('express')
const app = express();
//root of website , callbackfunction(req,res)
app.get('/',(req,res) => {
    res.send('Hello World');
});

app.get('/api/array',(req,res) => {
    res.send([1,2,3,4,5,6,7,8,9]);
});

//setting the port
const port = process.env.PORT || 3000
app.listen(port,()=> console.log(`Listening on port ${port}`))

app.get('/api/posts/:year/:month',(req,res) => {
    res.send(req.params);
});
