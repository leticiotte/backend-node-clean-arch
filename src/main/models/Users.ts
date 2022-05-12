import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  companyId: String,
  name: String,
  email: String,
  cpf: String,
});
userSchema.index({ companyId: 'text' });
const userModel = mongoose.model("Users", userSchema);
  
module.exports = userModel