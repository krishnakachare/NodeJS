const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connection = mongoose.connect(" mongodb://localhost/notesApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

module.exports={
    connection,
}