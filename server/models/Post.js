const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  banner: {
    type: String,
    default: "about.jpg",
  },
  tags: {
    type: [String],
    required: [true, "Please Add at least one tag"],
    enum: ['NEWS', 'ARTICLE', 'BLOG','RESEARCH PAPERS','CASE LAW'],
  },
  subtags: {
    type: [String],
    required: [true, "Please Add at least one tag"],
    enum: ['LAW SCHOOL','LEGAL COMMUNITY','LEGAL NEWS','LEGAL EDUCATION','CRIME','IPC','CONSTITUTION','LAW','LAW STUDENTS','LAWYERS','JUDICIARY']
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  title: {
    type: String,
    trim: true,
    required: [true, "Please Add a Post Title"],
    maxlength: [50, 'title can not be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, "Please Add a description"],
  },
  
});

module.exports = mongoose.model("Post", PostSchema);
