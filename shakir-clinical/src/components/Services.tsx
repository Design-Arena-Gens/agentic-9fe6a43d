import { FlaskConical, Microscope, ShieldCheck, Stethoscope } from "lucide-react";
import { Container } from "./Container";

const services = [
  {
    title: "Core Diagnostics",
    description: "Routine chemistry, hematology, immunology, and serology with automated quality checks.",
    icon: FlaskConical,
  },
  {
    title: "Specialized Testing",
    description: "Endocrine, allergy, prenatal screening, and advanced cardiac markers with rapid reporting.",
    icon: Microscope,
  },
  {
    title: "Preventive Packages",
    description: "Wellness profiles for corporate and community programs tailored to local health needs.",
    icon: Stethoscope,
  },
  {
    title: "Quality & Compliance",
    description: "Internationally accredited processes aligned with ISO 15189 and regional health regulations.",
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-brand-950 sm:text-4xl">Comprehensive laboratory services</h2>
          <p className="mt-4 text-base text-brand-600">
            We support physicians, hospitals, and individuals with an integrated portfolio of diagnostics designed
            to deliver confident clinical decisions.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-brand-900/10 bg-surface shadow-md shadow-brand-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/20"
            >
              <div className="absolute -top-16 right-16 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl transition group-hover:bg-teal-500/20" />
              <div className="relative flex flex-col gap-4 p-8">
                <service.icon className="h-12 w-12 text-teal-500" />
                <h3 className="text-xl font-semibold text-brand-900">{service.title}</h3>
                <p className="text-sm text-brand-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
