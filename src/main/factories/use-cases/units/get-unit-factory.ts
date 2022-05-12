import { GetUnit } from "../../../../domain/use-cases/units/get-unit";
import { DbGetUnit } from "../../../../data/use-cases/units/db-get-unit-use-cases";
import { MongoUnitRepository } from "../../../../infra/repositories/mongo/mongo-unit-repository";

export const makeGetUnitUseCase = (Unit: any): GetUnit => {
  const mongoGetUnitRepository = new MongoUnitRepository(Unit);
  return new DbGetUnit(mongoGetUnitRepository);
};
