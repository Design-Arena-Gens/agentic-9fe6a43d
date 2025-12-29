import { Cpu, Database, Globe2, Lock } from "lucide-react";
import { Container } from "./Container";

const features = [
  {
    title: "Interoperable",
    description: "HL7/FHIR ready connections with hospitals, clinics, and national health systems.",
    icon: Globe2,
  },
  {
    title: "Secure by design",
    description: "End-to-end encryption, multi-factor authentication, and zero-trust networking.",
    icon: Lock,
  },
  {
    title: "Analytics platform",
    description: "Population health dashboards for physicians with custom indicators and trend insights.",
    icon: Database,
  },
  {
    title: "Automation",
    description: "Robotic sample handling and real-time QA metrics for consistent turnaround.",
    icon: Cpu,
  },
];

export function Technology() {
  return (
    <section id="technology" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-brand-950 sm:text-4xl">Digital-first laboratory infrastructure</h2>
          <p className="mt-4 text-base text-brand-600">
            A connected ecosystem that ensures clinicians receive accurate insights faster, with full visibility into
            specimen status and performance metrics.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-brand-900/10 bg-surface p-8 shadow-lg shadow-brand-900/5">
              <feature.icon className="h-10 w-10 text-teal-500" />
              <h3 className="mt-6 text-xl font-semibold text-brand-900">{feature.title}</h3>
              <p className="mt-3 text-sm text-brand-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
