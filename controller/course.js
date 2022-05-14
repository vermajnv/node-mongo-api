import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const CourseModel = mongoose.model("Course", 'Course');

router.get('/list', (req, res) => {
    CourseModel.find((err, docs) => {
        if (!err) {
            res.render("course/list", { data : docs});
        }
        else
        {
            res.send('Failed..');
        }
    }).lean()
});

router.get("/add-course", (req, res) => {
    res.render('course/add');
});

router.post("/add", (req, res, next) => {
    const course = new CourseModel();
    course.name = req.body.name;
    course.duration = req.body.duration;
    course.fee = req.body.fee;
    course.id = Math.random();
    course.save((err, doc) => {
        if(!err) {
            res.redirect('/course/list');
        }
        else
        {
            next(err);
        }
    })
});

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    await CourseModel.deleteOne({_id : id})
    .then((result) => {
        res.json({result : result, redirect : '/course/list'});
    });
})

export default router;