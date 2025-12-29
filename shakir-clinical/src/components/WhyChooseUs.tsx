import { Award, Headset, Shield, Timer } from "lucide-react";
import { Container } from "./Container";

const pillars = [
  {
    icon: Award,
    title: "Accredited excellence",
    description: "ISO 15189 compliant processes with external proficiency validation across all departments.",
  },
  {
    icon: Timer,
    title: "Rapid turnaround",
    description: "Most routine panels reported within 6 hours and stat testing available 24/7.",
  },
  {
    icon: Headset,
    title: "Clinical support",
    description: "Consult with subspecialty pathologists and liaison officers for result interpretation.",
  },
  {
    icon: Shield,
    title: "Patient confidentiality",
    description: "Strict data governance with encrypted archives and role-based access for providers.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-brand-900 py-20 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">Trusted partner</span>
            <h2 className="text-3xl font-semibold sm:text-4xl">Why healthcare leaders choose Shakir Clinical Laboratory</h2>
            <p className="text-base text-brand-100">
              Our combination of medical expertise, robust technology, and compassionate service ensures reliability for
              both clinicians and patients.
            </p>
            <div className="grid gap-4 text-sm text-brand-100 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">99.5%</p>
                <p className="mt-1 text-sm">Specimen integrity</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">12+</p>
                <p className="mt-1 text-sm">Specialist pathologists</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <pillar.icon className="h-10 w-10 text-teal-200" />
                <h3 className="mt-4 text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-brand-100">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
