const mongoose = require('mongoose');
 const { Schema } = mongoose;


 const UserSchema = new Schema({
    email: { type: String, index: true, unique: true },
    password: String,
    firstname: String,
    lastname: String
 });

 const UserModel = mongoose.model( 'User', UserSchema);
 module.exports ={ UserModel};