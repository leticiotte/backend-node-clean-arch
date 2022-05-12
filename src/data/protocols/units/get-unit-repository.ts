import { Unit } from "../../../domain/entities/unit";

export interface GetUnitRepository {
  get: (unitId: string) => Promise<Unit>
}
