const mongoose = require('mongoose');

// articles

 
// heures d'ouverture


// commercants
var dossiersSchema = mongoose.Schema({
    name: String,
    firstName: String,
    cabinet: String, 
    type: String,
    email: String,
    password:String,
    address:String, 

  });
  
var DossierModel = mongoose.model('dossiers', dossiersSchema);

module.exports = DossierModel