var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://ggoirand:ggoirand@cluster0.j5gbjjx.mongodb.net/?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    }