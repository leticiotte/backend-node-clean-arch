const mongoose = require("mongoose");

import { AddUnitRepository } from "../../../data/protocols/units/add-unit-repository";
import { DeleteUnitRepository } from "../../../data/protocols/units/delete-unit-repository";
import { GetUnitRepository } from "../../../data/protocols/units/get-unit-repository";
import { ListUnitsRepository } from "../../../data/protocols/units/list-all-units-repository";
import { UpdateUnitRepository } from "../../../data/protocols/units/update-unit-repository";
import { Unit } from "../../../domain/entities/unit";

export class MongoUnitRepository
  implements
    AddUnitRepository,
    DeleteUnitRepository,
    GetUnitRepository,
    ListUnitsRepository,
    UpdateUnitRepository
{

  constructor (
    private readonly unitModel: any
    ) {}

  async add(unit: Unit): Promise<boolean> {
    try {
      await this.unitModel.create(unit);
      return true;
    } catch (error) {
      return false;
    }
  }

  async get(unitId: string): Promise<Unit | undefined> {
    try {
      const unit = await this.unitModel.findOne({ _id: unitId });
      return unit;
    } catch (error) {
      return undefined;
    }
  }

  async list(companyId?: string): Promise<Unit[]> {
    try {
      let filter;
      if(companyId)  filter = { $text : { $search : companyId } }
      const units = await this.unitModel.find(filter);
      return units;
    } catch (error) {
      return undefined;
    }
  }

  async delete(unitId: string): Promise<boolean> {
    try {
      await this.unitModel.deleteOne({ _id: unitId });
      return true;
    } catch (error) {
      return false;
    }
  }

  async update(unit: Unit): Promise<boolean> {
    const unitUpdate = {
      companyId: unit.companyId,
      name: unit.name,
      description: unit.description
    } 
    try {
      const updtatedUnit = await this.unitModel.updateOne({ _id: unit._id }, unitUpdate);
      if (updtatedUnit.matchedCount === 0) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
