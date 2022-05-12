export interface DeleteCompany {
  delete: (companyId: string) => Promise<boolean>
}
