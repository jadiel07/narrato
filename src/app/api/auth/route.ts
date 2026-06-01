// POST /api/auth/register — criar conta
// POST /api/auth/login    — autenticar usuário (NextAuth handles /api/auth/[...nextauth])
export async function POST() {
  return Response.json({ message: "auth route" })
}
