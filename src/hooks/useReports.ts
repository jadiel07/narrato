// TODO: Hook para listar, criar e deletar relatórios via API
export function useReports() {
  return {
    reports: [],
    isLoading: false,
    error: null,
    createReport: async () => {},
    deleteReport: async (_id: string) => {},
  }
}
