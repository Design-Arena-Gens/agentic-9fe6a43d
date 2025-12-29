import Link from "next/link";
import { Container } from "./Container";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600" />
      <Container className="relative rounded-[3rem] bg-white/5 p-10 text-center text-white shadow-2xl shadow-teal-500/40 backdrop-blur">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to elevate your diagnostics program?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-teal-100">
          Partner with Shakir Clinical Laboratory for comprehensive testing, digital transformation, and results you
          can trust for every patient.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-600 shadow-lg shadow-teal-500/40"
          >
            Book a consultation
          </Link>
          <Link
            href="/portal"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Patient portal
          </Link>
        </div>
      </Container>
    </section>
  );
}
