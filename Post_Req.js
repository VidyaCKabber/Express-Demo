//Handeling post request
const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

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

function validateCourse(course){
    //Validation using joi
    const schema = {
        name:Joi.string().min(3).required(),
        duration:Joi.string().required()
    };

    return Joi.validate(course,schema);
}

app.post('/api/courses',(req,res) => {
    //Treditional validation
    // if(!req.body.name || req.body.name.length < 3){
    //     res.status(400).send('Course name is required and name should be minimum of 3 characters')
    //     return;
    //}

    //Validation using joi
    const { error } = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id : courses.length + 1,
        name : req.body.name,
        duration :req.body.duration  
    }
    courses.push(course);
    res.send(course);
});

//Get updated course details
app.get('/api/getCourses',(req,res) =>{
    res.send(courses)
});