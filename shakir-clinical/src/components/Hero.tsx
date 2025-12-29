import Link from "next/link";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white">
      <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-brand-500/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
            Precision Diagnostics
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-brand-950 sm:text-5xl">
            Advanced laboratory medicine tailored to Shakir Clinical Laboratory patients
          </h1>
          <p className="text-base leading-relaxed text-brand-700 sm:text-lg">
            Delivering trusted diagnostics, digital result delivery, and round-the-clock support for hospitals,
            physicians, and community health programs across the region.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:shadow-xl hover:shadow-teal-500/50"
            >
              Explore Services
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center justify-center rounded-full border border-brand-900/10 px-6 py-3 text-sm font-semibold text-brand-900 hover:border-teal-500/50 hover:text-teal-500"
            >
              Access Your Reports
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
            {[
              { title: "Tests", value: "180+" },
              { title: "Accreditations", value: "ISO 15189" },
              { title: "Clinics", value: "45" },
              { title: "Support", value: "24/7" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-brand-900/10 bg-white/70 p-4">
                <dt className="text-brand-600">{item.title}</dt>
                <dd className="text-2xl font-semibold text-brand-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -translate-x-8 rounded-full bg-teal-500/10 blur-3xl" aria-hidden />
          <div className="relative grid gap-4">
            <div className="rounded-3xl border border-brand-900/10 bg-white/80 p-6 shadow-xl shadow-brand-900/5 backdrop-blur">
              <h3 className="text-base font-semibold text-brand-900">Molecular Pathology</h3>
              <p className="mt-2 text-sm text-brand-600">
                Comprehensive genetic sequencing with rapid turnaround for oncology and infectious diseases.
              </p>
            </div>
            <div className="ml-auto w-10/12 rounded-3xl border border-brand-900/10 bg-white/80 p-6 shadow-xl shadow-brand-900/5 backdrop-blur">
              <h3 className="text-base font-semibold text-brand-900">Patient Digital Portal</h3>
              <p className="mt-2 text-sm text-brand-600">
                Secure, mobile-responsive access to results, historical trends, and physician notes.
              </p>
            </div>
            <div className="w-11/12 rounded-3xl border border-brand-900/10 bg-white/80 p-6 shadow-xl shadow-brand-900/5 backdrop-blur">
              <h3 className="text-base font-semibold text-brand-900">Hospital Integrations</h3>
              <p className="mt-2 text-sm text-brand-600">
                HL7 compliant interfaces for seamless result delivery to partner EMRs and HIS platforms.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
