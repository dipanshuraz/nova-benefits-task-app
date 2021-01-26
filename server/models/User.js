var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullname: { type: String, required : [true, 'Please add a Name'] },
  company: { type: Schema.ObjectId, ref: 'Company', default: null },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('User', UserSchema);