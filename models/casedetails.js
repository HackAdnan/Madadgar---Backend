const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  nicNumber: { type: String, required: true },
  lastLocation: { type: String, required: true },
  additionalInfo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Report", reportSchema);
