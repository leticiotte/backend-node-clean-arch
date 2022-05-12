import { Unit } from "../../entities/unit"

export interface UpdateUnit {
  update: (unit: Unit) => Promise<boolean>
}
