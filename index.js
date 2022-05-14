import * as mongoose from './model/index.js';
import express from 'express';
import path from 'path';
import url, { fileURLToPath } from 'url';
import {engine} from 'express-handlebars';
import bodyParser from 'body-parser';
import CourseController from './controller/course.js';
const app = express();

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
// console.log('filename ' , __filename);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, '/views/'))

app.use('/static', express.static(path.join(__dirname, 'public')));
app.engine('hbs', new engine({
    extname : "hbs",
    defaultLayout : 'mainLayout',
    layoutDir : __dirname + "/views/layouts"
}));

app.set("view engine", "hbs");
app.use('/course', CourseController);
app.get('/', (req, res) => {
    res.end('This is the home page');
})
app.listen('3000', () => {
    console.log('server started');
});

