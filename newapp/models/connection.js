var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://ggoirandavocat:avocat@cluster0.jg6hbol.mongodb.net/?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    })