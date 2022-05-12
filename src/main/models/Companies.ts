import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: String,
  email: String,
  cnpj: String,
});
const companyModel = mongoose.model("Companies", companySchema);
  
module.exports = companyModel