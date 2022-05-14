import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : true
    },
    duration : {
        type : String,
    },
    fee : {
        type : Number,
    }
});

mongoose.model('Course', courseSchema);