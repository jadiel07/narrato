import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"

const FEATURES = [
  {
    icon: "📂",
    title: "Sobe qualquer arquivo",
    description:
      "CSV, Excel, texto bruto. O Narrato lê seus dados sem complicação, independente do formato.",
  },
  {
    icon: "🤖",
    title: "IA analisa e escreve",
    description:
      "Nossa IA lê seus dados, identifica padrões e escreve um relatório completo em segundos.",
  },
  {
    icon: "📄",
    title: "Exporta pronto pra uso",
    description:
      "Baixe em PDF ou Word, formatado e profissional. Pronto pra enviar pro cliente ou chefe.",
  },
  {
    icon: "🎯",
    title: "Templates especializados",
    description:
      "Vendas, financeiro, RH, marketing. Cada área tem seu template otimizado.",
  },
  {
    icon: "📊",
    title: "Histórico completo",
    description:
      "Todos os seus relatórios salvos e organizados. Acesse, edite e reexporte quando quiser.",
  },
  {
    icon: "🔒",
    title: "Seguro e privado",
    description:
      "Seus dados ficam criptografados e nunca são usados pra treinar modelos de IA.",
  },
]

const STEPS = [
  {
    number: "01",
    title: "Sobe seus dados",
    description: "Arraste um CSV, Excel ou cole o texto com seus números direto na tela.",
  },
  {
    number: "02",
    title: "Escolhe o template",
    description: "Selecione o tipo de relatório: financeiro, vendas, RH ou geral.",
  },
  {
    number: "03",
    title: "A IA gera o relatório",
    description: "Em segundos você tem um relatório completo, com análise e recomendações.",
  },
  {
    number: "04",
    title: "Baixa e usa",
    description: "Exporte em PDF ou Word e envie pra quem precisar. Sem editar nada.",
  },
]

const PLANS = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "para sempre",
    description: "Pra você experimentar sem compromisso.",
    features: ["3 relatórios por mês", "Templates básicos", "Exportar em PDF", "Suporte por e-mail"],
    cta: "Começar grátis",
    href: "/auth/register",
    highlight: false,
  },
  {
    name: "Pro",
    price: "R$ 49",
    period: "por mês",
    description: "Para quem gera relatórios com frequência.",
    features: [
      "Relatórios ilimitados",
      "Todos os templates",
      "Exportar PDF e Word",
      "Histórico completo",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    href: "/auth/register?plan=pro",
    highlight: true,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs text-stone-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Powered by Claude AI
        </div>

        <h1 className="font-display mx-auto mb-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-stone-900 md:text-6xl">
          Seus dados têm uma{" "}
          <span className="relative">
            <span className="relative z-10 text-emerald-600">história pra contar</span>
            <span className="absolute bottom-1 left-0 right-0 -z-0 h-3 rounded bg-emerald-100" />
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-stone-500">
          Cole uma planilha, escolha o template e receba um relatório profissional completo em segundos.
          Sem copiar número por número. Sem formatar nada.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/auth/register"
            className="rounded-full bg-stone-900 px-8 py-3.5 text-sm font-medium text-amber-50 transition hover:bg-stone-700"
          >
            Gerar meu primeiro relatório →
          </Link>
          <Link
            href="#how"
            className="rounded-full border border-stone-200 bg-white px-8 py-3.5 text-sm font-medium text-stone-600 transition hover:border-stone-300"
          >
            Ver como funciona
          </Link>
        </div>

        {/* Hero mockup */}
        <div className="mt-20 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-stone-100 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
            <span className="ml-4 text-xs text-stone-400">narrato.app/upload</span>
          </div>
          <div className="grid grid-cols-2 divide-x divide-stone-100">
            <div className="p-6 text-left">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-400">
                Seus dados
              </p>
              <div className="space-y-1.5 font-mono text-xs text-stone-500">
                <div className="flex gap-4">
                  <span className="text-stone-400">Mês</span>
                  <span>Vendas</span>
                  <span>Meta</span>
                </div>
                {[
                  ["Jan", "R$ 84.200", "R$ 80.000"],
                  ["Fev", "R$ 91.500", "R$ 85.000"],
                  ["Mar", "R$ 78.300", "R$ 90.000"],
                  ["Abr", "R$ 103.700", "R$ 95.000"],
                ].map(([mes, vendas, meta]) => (
                  <div key={mes} className="flex gap-4">
                    <span className="text-stone-400">{mes}</span>
                    <span className="text-emerald-600">{vendas}</span>
                    <span>{meta}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 text-left">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-400">
                Relatório gerado
              </p>
              <div className="space-y-2 text-xs leading-relaxed text-stone-600">
                <p className="font-medium text-stone-800">Resumo Executivo</p>
                <p>
                  O trimestre apresentou crescimento de <strong>12,4%</strong> nas vendas,
                  superando a meta em 3 dos 4 meses analisados.
                </p>
                <p>
                  O mês de <strong>abril</strong> foi o melhor do período, com R$ 103.700 em
                  vendas — <strong>9,2% acima da meta</strong>.
                </p>
                <p className="text-stone-400">↓ Análise detalhada · Recomendações · Próximos passos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-stone-200 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-400">
              Como funciona
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              De dados bagunçados a relatório pronto em 4 passos
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.number} className="relative">
                <span className="font-display mb-4 block text-5xl font-bold text-stone-100">
                  {step.number}
                </span>
                <h3 className="mb-2 font-medium text-stone-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-400">
              Funcionalidades
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Tudo que você precisa pra parar de fazer relatório na mão
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-stone-300"
              >
                <span className="mb-4 block text-2xl">{f.icon}</span>
                <h3 className="mb-2 font-medium text-stone-900">{f.title}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-stone-200 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-400">
              Preços
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Simples. Sem surpresa.
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${
                  plan.highlight
                    ? "border-stone-900 bg-stone-900 text-amber-50"
                    : "border-stone-200 bg-white text-stone-900"
                }`}
              >
                <p
                  className={`mb-1 text-sm font-medium ${
                    plan.highlight ? "text-amber-200" : "text-stone-400"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                  <span
                    className={`text-sm ${plan.highlight ? "text-stone-400" : "text-stone-400"}`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`mb-6 text-sm ${
                    plan.highlight ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="mb-8 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className={plan.highlight ? "text-emerald-400" : "text-emerald-600"}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block w-full rounded-full py-3 text-center text-sm font-medium transition ${
                    plan.highlight
                      ? "bg-amber-50 text-stone-900 hover:bg-amber-100"
                      : "bg-stone-900 text-amber-50 hover:bg-stone-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display mb-4 text-4xl font-semibold tracking-tight">
            Chega de relatório feito na força bruta
          </h2>
          <p className="mb-8 text-lg text-stone-500">
            Seus dados já têm a história. O Narrato só escreve ela pra você.
          </p>
          <Link
            href="/auth/register"
            className="inline-block rounded-full bg-stone-900 px-10 py-4 font-medium text-amber-50 transition hover:bg-stone-700"
          >
            Começar grátis agora →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-display text-lg font-semibold text-stone-900">
              narra<span className="text-emerald-600">to</span>
            </span>
            <p className="text-xs text-stone-400">
              © {new Date().getFullYear()} Narrato. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
