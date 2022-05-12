import { UpdateUnit } from "../../../../domain/use-cases/units/update-unit";
import { DbUpdateUnit } from "../../../../data/use-cases/units/db-update-unit-use-cases";
import { MongoUnitRepository } from "../../../../infra/repositories/mongo/mongo-unit-repository";

export const makeUpdateUnitUseCase = (Unit: any): UpdateUnit => {
  const mongoUpdateUnitRepository = new MongoUnitRepository(Unit);
  return new DbUpdateUnit(mongoUpdateUnitRepository);
};
