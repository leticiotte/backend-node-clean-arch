import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({
  companyId: String,
  name: String,
  description: String
});
unitSchema.index({ companyId: 'text' });
const unitModel = mongoose.model("Units", unitSchema);
  
module.exports = unitModel