import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  unitId: String,
  name: String,
  description: String,
  image: String,
  model: String,
  owner: String,
  status: String,
  healthLevel: Number,
})
assetSchema.index({ unitId: 'text' });
const assetModel = mongoose.model("Assets", assetSchema);
  
module.exports = assetModel