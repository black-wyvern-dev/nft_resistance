const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    wallet_address: String,
    name: String,
    gender: String,
    faction: String,
    skin: String,
    eye: String,
    mouth: String,
    nose: String,
    scar: String,
    top: String,
    hair: String,
    beard: String,
    accesory: String,
    image: String,
    strength: String,
    intelligence: String,
    speed: String,
    rarity: String,
    desc: String
})

module.exports = mongoose.model('users', userSchema);