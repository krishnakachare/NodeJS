const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/uploads`);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix+'.jpg' );
    },
  });

const upload = multer({ storage });
  
const app = express();

app.use(express.json());  // middlewares

// application-level
// router-level
// built in middleware
// error handling
// third-party
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs'), { flags: 'a' })  // folder/logs
app.use(morgan('combined',{stream:accessLogStream}))  // logger middleware 
/// how to store these logs to a file

// validation middleware
function validation(req,res,next){
    const {id,name,genre,description,cast,rating} = req.body;
    if(typeof(id)==="number"&&typeof(name)==="string"&&typeof(genre)==="string"&&typeof(description)==="string"&&typeof(rating)==="number"&&Array.isArray(cast)){
        next();
    }else{
        res.send("validation failed.")
    }
}

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
    // res.send("Middlewares and file-uploader-PSC");
})


app.post("/upload",upload.single("avatar"),(req,res)=>{
    console.log(req.file);
    res.send("File uploaded")
})
app.post("/movie/new",validation,async(req,res)=>{
    try {
        console.log(req.body);
        res.send("Movie added");
    } catch (error) {
        res.send(error.message);
    }
})

// fileuploader -- using multer------------

app.listen(8080,()=>{
    console.log('Listening on http://localhost:8080')
})