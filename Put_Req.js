//Handeling put request
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

//Validation
function validateCourseDuration(course){
    //User input validation
    const schema = {
       duration : Joi.string().required()
       //name : Joi.string().min(3).required()
   };
   
   return Joi.validate(course,schema);
}

//Updating the course
app.put('/api/update_course/:id',(req,res) =>{
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course){
        res.send(course);//Print course details of provided course id
    }
    else{
        res.status(404).send('Course does not found with given id')
    }

    //Validation
    const { error } = validateCourseDuration(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    
    //Update couse duration
    course.duration = req.body.duration;
    //course.name = req.body.name;

});


app.get('/api/getCourses',(req,res) =>{
    res.send(courses);
});