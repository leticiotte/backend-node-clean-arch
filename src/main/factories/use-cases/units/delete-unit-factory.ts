import { DeleteUnit } from "../../../../domain/use-cases/units/delete-unit";
import { DbDeleteUnit } from "../../../../data/use-cases/units/db-delete-unit-use-cases";
import { MongoUnitRepository } from "../../../../infra/repositories/mongo/mongo-unit-repository";

export const makeDeleteUnitUseCase = (Unit: any): DeleteUnit => {
  const mongoDeleteUnitRepository = new MongoUnitRepository(Unit);
  return new DbDeleteUnit(mongoDeleteUnitRepository);
};
