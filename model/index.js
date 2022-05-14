import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/testapi', (err) => {
    if (!err) {
        console.log('connected...');
    }
    else{
        console.log(`Something went wrong ${err}`);
    }
});

import * as course from './course.model.js';