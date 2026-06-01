// GET    /api/reports/:id — buscar relatório por id
// DELETE /api/reports/:id — deletar relatório
export async function GET(_: Request, { params }: { params: { id: string } }) {
  return Response.json({ id: params.id })
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return Response.json({ deleted: params.id })
}
