//Handeling get request
const express = require('express');
const app = express();

//App listening port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))

const courses = [
    {id:1, name:'Artifical Intelligance', duration:'15hrs'},
    {id:2, name:'Machine Learning', duration:'10hrs'},
    {id:3, name:'ReactNative', duration:'8hrs'},
    {id:4, name:'ReactJs', duration:'7hrs'},
    {id:5, name:'Python Programming', duration:'9hrs'}
];

//fetch all courses
app.get('/api/courses',(req,res) => {
    res.send(courses)
})

//access course on id
app.get('/api/courses/:id',(req,res) => {
    //Verify course is present in a given id
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course){
        res.send(course);//Print course details of provided course id
    }
    else{
        res.status(404).send('Course does not found with given id')
    }
});