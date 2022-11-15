const mongoose = require('mongoose');

// articles

 
// heures d'ouverture

var SpecialiteSchema = mongoose.Schema({
    Domaine: String,
    HeuresOuverts: Number,
    Heuresfermes: Number, 
   });

// commercants
var avocatsSchema = mongoose.Schema({
    name: String,
    firstName: String,
    cabinet: String, 
    type: String,
    email: String,
    password:String,
    address:String, 
    specialite: [SpecialiteSchema ],
    touches : [{ type: mongoose.Schema.Types.ObjectId, ref: 'dossiers' }],

  });
  
var AvocatModel = mongoose.model('avocats', avocatsSchema);

module.exports = AvocatModel