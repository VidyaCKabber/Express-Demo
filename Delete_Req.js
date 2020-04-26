const express = require('express');
const app = express();

//App listening port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))

let courses = [
    {id:1, name:'Artifical Intelligance', duration:'15hrs'},
    {id:2, name:'Machine Learning', duration:'10hrs'},
    {id:3, name:'ReactNative', duration:'8hrs'},
    {id:4, name:'ReactJs', duration:'7hrs'},
    {id:5, name:'Python Programming', duration:'9hrs'}
];

app.delete('/api/delete_course/:id',(req,res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course){
        courses = courses.filter((item) => item.id !== parseInt(req.params.id));
        res.send(course);//Deleted course
    }
    else{
        res.status(404).send('Course does not found with given id')
    }
});

app.get('/api/get_course',(req,res) =>{
    res.send(courses);
});
