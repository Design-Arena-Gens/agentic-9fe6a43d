import Link from "next/link";
import { Container } from "./Container";

const features = [
  {
    title: "Secure login",
    description: "Two-step verification with one-time passcodes and device history.",
  },
  {
    title: "Historical insights",
    description: "Trend charts for key biomarkers with physician annotations.",
  },
  {
    title: "Instant sharing",
    description: "Share reports directly with your doctor or download password-protected PDFs.",
  },
];

export function ReportPortalPreview() {
  return (
    <section className="bg-brand-50 py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-brand-950 sm:text-4xl">Digital report access for patients and physicians</h2>
          <p className="text-base text-brand-600">
            Our online portal keeps patients informed with real-time updates, easy-to-read summaries, and the ability to
            consult with Shakir specialists for deeper insights.
          </p>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.title} className="rounded-3xl border border-brand-900/10 bg-white p-5 shadow-brand-900/5">
                <p className="text-sm font-semibold text-brand-900">{feature.title}</p>
                <p className="text-sm text-brand-600">{feature.description}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/portal"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30"
          >
            Launch patient portal
          </Link>
        </div>
        <div className="relative rounded-[3rem] border border-brand-900/10 bg-white p-8 shadow-2xl shadow-brand-900/10">
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <p className="font-semibold text-brand-900">Comprehensive Metabolic Panel</p>
              <span className="rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-600">Ready</span>
            </div>
            <div className="grid gap-3 text-xs text-brand-600">
              <div className="flex justify-between rounded-2xl border border-brand-900/5 bg-brand-50 px-4 py-3">
                <span>Glucose</span>
                <span className="font-semibold text-brand-900">4.8 mmol/L</span>
              </div>
              <div className="flex justify-between rounded-2xl border border-brand-900/5 bg-brand-50 px-4 py-3">
                <span>ALT</span>
                <span className="font-semibold text-brand-900">26 U/L</span>
              </div>
              <div className="flex justify-between rounded-2xl border border-brand-900/5 bg-brand-50 px-4 py-3">
                <span>Creatinine</span>
                <span className="font-semibold text-brand-900">0.83 mg/dL</span>
              </div>
            </div>
            <div className="rounded-3xl border border-dashed border-teal-500/30 bg-teal-500/5 p-4 text-xs text-teal-700">
              Share results securely with your physician or download encrypted PDFs for personal records.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
