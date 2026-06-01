export type Plan = "FREE" | "PRO"
export type ReportStatus = "PENDING" | "PROCESSING" | "DONE" | "ERROR"
export type ReportTemplate = "general" | "financial" | "sales" | "hr" | "marketing"

export interface User {
  id: string
  name: string | null
  email: string
  plan: Plan
  credits: number
  createdAt: Date
}

export interface Report {
  id: string
  title: string
  content: string
  template: ReportTemplate
  status: ReportStatus
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface GenerateReportInput {
  title: string
  template: ReportTemplate
  rawData: string
}
