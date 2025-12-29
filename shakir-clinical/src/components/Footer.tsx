import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const socials = [
  { name: "Instagram", href: "https://instagram.com/shakirlab" },
  { name: "LinkedIn", href: "https://linkedin.com/company/shakirlab" },
  { name: "Twitter", href: "https://x.com/shakirlab" },
];

const quickLinks = [
  { name: "Patient Portal", href: "/portal" },
  { name: "Home Collection", href: "#services" },
  { name: "Careers", href: "#contact" },
  { name: "Quality Standards", href: "#why-us" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-900/10 bg-brand-950 text-brand-200">
      <Container className="grid gap-10 py-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.svg" alt="Shakir Clinical Laboratory" width={40} height={40} />
            <div>
              <p className="text-lg font-semibold text-white">Shakir Clinical Laboratory</p>
              <p className="text-xs text-brand-400">Precision diagnostics for the Kingdom</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-brand-400">
            We partner with physicians, hospitals, and community programs to deliver accurate diagnostics, actionable
            analytics, and empathetic patient care across Saudi Arabia.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-teal-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Follow</p>
          <ul className="mt-4 space-y-2 text-sm">
            {socials.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noopener" className="hover:text-teal-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col justify-between gap-3 text-xs text-brand-500 sm:flex-row">
          <p>© {currentYear} Shakir Clinical Laboratory. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Sitemap</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
