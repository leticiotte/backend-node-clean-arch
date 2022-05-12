import { Unit } from "../../../domain/entities/unit";

export interface ListUnitsRepository {
  list: (companyId?: string) => Promise<Unit[]>
}
