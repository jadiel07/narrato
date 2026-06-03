"use client"

import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-100 bg-amber-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-stone-900">
            narra<span className="text-emerald-600">to</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-stone-500 transition hover:text-stone-900">
            Funcionalidades
          </Link>
          <Link href="#how" className="text-sm text-stone-500 transition hover:text-stone-900">
            Como funciona
          </Link>
          <Link href="#pricing" className="text-sm text-stone-500 transition hover:text-stone-900">
            Preços
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="hidden text-sm text-stone-600 transition hover:text-stone-900 md:block"
          >
            Entrar
          </Link>
          <Link
            href="/auth/register"
            className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-amber-50 transition hover:bg-stone-700"
          >
            Começar grátis
          </Link>
        </div>
      </div>
    </header>
  )
}
