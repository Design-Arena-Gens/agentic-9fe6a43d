import { Container } from "./Container";

const diagnostics = [
  {
    title: "Genomics & Molecular",
    points: [
      "Real-time PCR infectious disease panels",
      "Oncology gene panels with actionable targets",
      "Carrier screening and prenatal diagnostics",
    ],
  },
  {
    title: "Microbiology & Virology",
    points: [
      "Automated culture and susceptibility profiling",
      "Rapid viral detection including respiratory pathogens",
      "Antimicrobial stewardship reporting",
    ],
  },
  {
    title: "Pathology & Histology",
    points: [
      "Digital pathology with subspecialty consults",
      "Immunohistochemistry and cytogenetics",
      "Fully digitized chain of custody workflows",
    ],
  },
];

export function AdvancedDiagnostics() {
  return (
    <section id="diagnostics" className="relative overflow-hidden bg-brand-50 py-20">
      <div className="absolute inset-y-0 right-[-20%] hidden w-1/2 bg-gradient-to-l from-teal-400/30 to-transparent blur-3xl lg:block" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-600">Advanced diagnostics</span>
            <h2 className="text-3xl font-semibold text-brand-950 sm:text-4xl">
              High-complexity laboratories powered by automation and expertise
            </h2>
            <p className="text-base text-brand-600">
              Our multidisciplinary scientists provide comprehensive coverage across specialties with strict
              reference standards and double verification for every result released.
            </p>
            <div className="flex gap-6 text-sm font-semibold text-brand-900">
              <div>
                <p className="text-4xl">98.7%</p>
                <p className="text-brand-600">Quality agreement</p>
              </div>
              <div>
                <p className="text-4xl">20+</p>
                <p className="text-brand-600">Regional partners</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {diagnostics.map((item) => (
              <div key={item.title} className="rounded-3xl border border-brand-900/10 bg-white/80 p-8 shadow-lg shadow-brand-900/5 backdrop-blur">
                <h3 className="text-xl font-semibold text-brand-900">{item.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-brand-600">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
