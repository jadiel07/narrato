import Anthropic from "@anthropic-ai/sdk"
import { ReportTemplate } from "@/types"

const client = new Anthropic()

const TEMPLATE_PROMPTS: Record<ReportTemplate, string> = {
  general:   "Gere um relatório profissional e completo com análise dos dados fornecidos.",
  financial: "Gere um relatório financeiro com análise de receitas, despesas e tendências.",
  sales:     "Gere um relatório de vendas com métricas de desempenho e insights estratégicos.",
  hr:        "Gere um relatório de RH com análise de pessoas, produtividade e recomendações.",
  marketing: "Gere um relatório de marketing com análise de campanhas, ROI e próximos passos.",
}

export async function generateReport(
  rawData: string,
  template: ReportTemplate,
  title: string
): Promise<string> {
  const systemPrompt = `Você é um analista de dados sênior. ${TEMPLATE_PROMPTS[template]}
Estruture o relatório com: Resumo Executivo, Análise Detalhada, Principais Insights e Recomendações.
Use linguagem profissional e objetiva. Formate em Markdown.`

  const message = await client.messages.create({
    model: "claude-opus-4-20250514",
    max_tokens: 4096,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: `Título: ${title}\n\nDados:\n${rawData}`,
      },
    ],
  })

  const textBlock = message.content.find((b) => b.type === "text")
  if (!textBlock || textBlock.type !== "text") throw new Error("Resposta inválida da IA")

  return textBlock.text
}
