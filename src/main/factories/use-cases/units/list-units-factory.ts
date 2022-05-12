import { ListUnits } from "../../../../domain/use-cases/units/list-all-units";
import { DbListUnits } from "../../../../data/use-cases/units/db-list-all-units-use-cases";
import { MongoUnitRepository } from "../../../../infra/repositories/mongo/mongo-unit-repository";

export const makeListUnitsUseCase = (Unit: any): ListUnits => {
  const mongoListUnitsRepository = new MongoUnitRepository(Unit);
  return new DbListUnits(mongoListUnitsRepository);
};
