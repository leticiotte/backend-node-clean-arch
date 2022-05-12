const mongoose = require("mongoose");

import { AddCompanyRepository } from "../../../data/protocols/companies/add-company-repository";
import { DeleteCompanyRepository } from "../../../data/protocols/companies/delete-company-repository";
import { GetCompanyRepository } from "../../../data/protocols/companies/get-company-repository";
import { ListCompaniesRepository } from "../../../data/protocols/companies/list-all-companies-repository";
import { UpdateCompanyRepository } from "../../../data/protocols/companies/update-company-repository";
import { Company } from "../../../domain/entities/company";

export class MongoCompanyRepository
  implements
    AddCompanyRepository,
    DeleteCompanyRepository,
    GetCompanyRepository,
    ListCompaniesRepository,
    UpdateCompanyRepository
{

  constructor (
    private readonly companyModel: any
    ) {}

  async add(company: Company): Promise<boolean> {
    try {
      await this.companyModel.create(company);
      return true;
    } catch (error) {
      return false;
    }
  }

  async get(companyId: string): Promise<Company | undefined> {
    try {
      const company = await this.companyModel.findOne({ _id: companyId });
      return company;
    } catch (error) {
      return undefined;
    }
  }

  async list(): Promise<Company[]> {
    try {
      const companies = await this.companyModel.find();
      return companies;
    } catch (error) {
      return undefined;
    }
  }

  async delete(companyId: string): Promise<boolean> {
    try {
      await this.companyModel.deleteOne({ _id: companyId });
      return true;
    } catch (error) {
      return false;
    }
  }

  async update(company: Company): Promise<boolean> {
    const companyUpdate = {
      name: company.name,
      email: company.email,
      cnpj: company.cnpj
    } 
    try {
      const updtatedCompany = await this.companyModel.updateOne({ _id: company._id }, companyUpdate);
      if (updtatedCompany.matchedCount === 0) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
