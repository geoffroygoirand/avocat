const mongoose = require('mongoose');

// articles

 
// heures d'ouverture

var SpecialiteSchema = mongoose.Schema({
    Dayclosed: String,
    HeuresOuverts: Number,
    Heuresfermes: Number, 
   });

// commercants
var dossiersSchema = mongoose.Schema({
    name: String,
    firstName: String,
    cabinet: String, 
    type: String,
    email: String,
    password:String,
    address:String, 
    specialite: [SpecialiteSchema ],

  });
  
var DossierModel = mongoose.model('dossiers', dossiersSchema);

module.exports = DossierModel