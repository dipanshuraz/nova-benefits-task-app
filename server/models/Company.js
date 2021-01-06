const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  
  companyName: { type: String, required : [true, 'Please add a Name'] },
  website: { type: String },
  numOfEmp: { type: String },
  fundingStage : {
    type: String,
    enum: [
      'Self-funding',
      'Seed-capital',
      'Venture',
      'Series A',
      'Series B',
      'Series C',
      'IPO',
      'NA'
    ],
    default: 'NA',
  },
  industry : {
    type: String,
    enum: [
      'Fashion',
      'Food',
      'Education',
      'Music',
      'Internet',
      'Real Estate',
      'Sports',
      'Transport',
      'Finance',
      'Software',
      'Others'
    ],
    default: 'Others',
  },
  benefits: {
    healthInsurance : {type : Boolean ,default:false},
    sumInsured: { type: String, default: '' },
    familyCovered: {type : Boolean ,default : false},
    parentsCovered: {type : Boolean ,default : false},
    maternityCovered: {type : Boolean ,default : false},
  },
  gymMembership : {type : Boolean ,default:false},
  freeDocOnCall: { type: String, default: '' },
  numOfPaidLeaves: { type: Number, default: null },
  flexibleTimings: {type : Boolean ,default:false},
  remoteWorkFriendly: {type : Boolean ,default:false},
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Company', CompanySchema);