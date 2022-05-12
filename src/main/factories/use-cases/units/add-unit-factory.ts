import { AddUnit } from "../../../../domain/use-cases/units/add-unit";
import { DbAddUnit } from "../../../../data/use-cases/units/db-add-unit-use-cases";
import { MongoUnitRepository } from "../../../../infra/repositories/mongo/mongo-unit-repository";

export const makeAddUnitUseCase = (Unit: any): AddUnit => {
  const mongoAddUnitRepository = new MongoUnitRepository(Unit);
  return new DbAddUnit(mongoAddUnitRepository);
};
