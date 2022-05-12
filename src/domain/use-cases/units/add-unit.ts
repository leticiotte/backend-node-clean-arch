import { Unit } from "../../entities/unit";

export interface AddUnit {
  add: (unit: Unit) => Promise<boolean>
}
