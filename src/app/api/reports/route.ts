// GET  /api/reports — listar relatórios do usuário autenticado
// POST /api/reports — gerar novo relatório via IA
export async function GET() {
  return Response.json({ reports: [] })
}

export async function POST() {
  return Response.json({ message: "generating..." })
}
