const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required : [true, 'Please add a Name'] },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  company: { type: String, required : [true, 'Please add a Name'] },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('User', UserSchema);