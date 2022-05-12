import { Unit } from "../../entities/unit"

export interface ListUnits {
  list: (companyId?: string) => Promise<Unit[]>
}
