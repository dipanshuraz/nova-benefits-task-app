const fs = require('fs');
const mongoose = require('mongoose');

require('dotenv').config();

// Path
const path = './controller/data.json';

// Load models
const Company = require('./models/Company');
// const Bootcamp = require('./app/models/Bootcamp');

// Connect to DB
mongoose.connect(
  'mongodb+srv://admin:123@mongodb-codersadhu.bowrk.mongodb.net/nova?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const companies = JSON.parse(
  fs.readFileSync(`${__dirname}/data.json`, 'utf-8')
);

// const bootcamps = JSON.parse(
//   fs.readFileSync(`${__dirname}/bootcamps.json`, 'utf-8')
// );

// Import into DB
const importData = async () => {
  try {
    await Company.create(companies);

    console.log('company data imported ...');

    // fs.unlink(path, (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    // });

    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await ZipCode.deleteMany();
    // await Bootcamp.deleteMany();

    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
