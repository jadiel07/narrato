// TODO: Card de relatório — título, data, status badge, ações (ver, exportar, deletar)
import { Report } from "@/types"

export function ReportCard({ report }: { report: Report }) {
  return (
    <div>
      <h3>{report.title}</h3>
      <span>{report.status}</span>
    </div>
  )
}
