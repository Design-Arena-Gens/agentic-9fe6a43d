"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Diagnostics", href: "#diagnostics" },
  { name: "Technology", href: "#technology" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
  { name: "Portal", href: "/portal" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/10 bg-surface/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Shakir Clinical Laboratory" width={48} height={48} priority />
          <span className="font-semibold text-lg text-brand-900">
            Shakir Clinical Laboratory
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-900 lg:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition hover:text-teal-500">
              {item.name}
            </Link>
          ))}
          <Link
            href="/portal"
            className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2 text-white shadow-lg shadow-teal-500/30 transition hover:shadow-xl hover:shadow-teal-500/40"
          >
            Access Reports
          </Link>
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-lg border border-brand-900/10 p-2 text-brand-900 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open ? (
        <div className="border-t border-brand-900/10 bg-surface lg:hidden">
          <Container className="flex flex-col space-y-4 py-6 text-base font-medium text-brand-900">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-teal-500"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/portal"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2 text-center text-white shadow-lg shadow-teal-500/30"
            >
              Access Reports
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
