var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CompanySchema = new Schema({
  companyName: { type: String, required: [true, 'Please add a Name'] },
  website: { type: String },
  domain : {type : String},
  numOfEmp: { type: String },
  fundingStage: {
    type: String,
    enum: [
      'Self-funding',
      'Seed-capital',
      'Venture',
      'Series A',
      'Series B',
      'Series C',
      'IPO',
      'NA',
    ],
    default: 'NA',
  },
  industry: {
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
      'Others',
    ],
    default: 'Others',
  },
  benefits: { type: Boolean, default: false },
  healthInsurance: { type: Boolean, default: false },
  sumInsured: { type: String, default: 0 },
  familyCovered: { type: Boolean, default: false },
  parentsCovered: { type: Boolean, default: false },
  maternityCovered: { type: Boolean, default: false },
  gymMembership: { type: Boolean, default: false },
  freeDocOnCall: { type: String, default: false },
  numOfPaidLeaves: { type: Number, default: 0 },
  flexibleTimings: { type: Boolean, default: false },
  remoteWorkFriendly: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Company', CompanySchema);
