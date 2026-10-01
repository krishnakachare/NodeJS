//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation and is used to translate between objects in code and the representation of those objects in MongoDB.

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

mongoose.connect("mongodb://localhost:27017/mtutorial")
.then(() => {
console.log("connection successful...");
})
.catch((err) => {
    console.log(err);
});

//Schema in mongoose defines the structure of the document, default values, validators, etc.
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
},
    course : String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//Model in mongoose is a wrapper on the Schema, it provides an interface to the database for creating, querying, updating, deleting records, etc.

//Since Playlist is a class starts with capital letter.
const Playlist = new mongoose.model("Playlist", playlistSchema); //collection creation

//create/insert a document
//CREATE
const createDocument = async () => {
    try {
        const nodejsPlaylist = new Playlist({
            name: "Nodejs",
            course : "BE",
            videos: 60,
            author: "Tanu",
            active: true,
        })

        const reactjsPlaylist = new Playlist({
            name: "Reactjs",
            course : "FE",
            videos: 40,
            author: "Tanu",
            active: true,
        })
        
        const jsPlaylist = new Playlist({
            name: "js",
            course : "FE",
            videos: 55,
            author: "Tanu",
            active: true,
        })

        const result = await Playlist.insertMany([nodejsPlaylist,reactjsPlaylist,jsPlaylist]);
        console.log(result);
    }
    catch (err){
        console.log(err);
    }
}    

createDocument();

//READ
const getDocument = async () => {
    try{
        const result = await Playlist.insertMany([nodejsPlaylist,reactjsPlaylist,jsPlaylist]);
        console.log(result);
        } catch (err){
        console.log(err);
        }
}

getDocument();

//This needs to be revisited and revised. Facing an error.

