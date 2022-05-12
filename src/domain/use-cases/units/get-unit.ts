import { Unit } from "../../entities/unit";

export interface GetUnit {
  get: (unitId: string) => Promise<Unit>
}
