const mongoose = require('mongoose');

// articles

 
// heures d'ouverture

var SpecialiteSchema = mongoose.Schema({
    Dayclosed: String,
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

  });
  
var AvocatModel = mongoose.model('avocats', avocatsSchema);

module.exports = AvocatModel