export interface DeleteCompanyRepository {
  delete: (companyId: string) => Promise<boolean>
}
