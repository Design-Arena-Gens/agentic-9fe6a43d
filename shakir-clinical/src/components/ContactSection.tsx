import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./Container";

const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: "+966 11 555 1234",
    href: "tel:+966115551234",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@shakirlab.com",
    href: "mailto:care@shakirlab.com",
  },
  {
    icon: MapPin,
    label: "Central lab",
    value: "King Fahd Rd, Riyadh, Saudi Arabia",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-brand-950 sm:text-4xl">Speak with our care coordinators</h2>
          <p className="text-base text-brand-600">
            Our clinical liaison team is available 24/7 to support physicians, manage outreach programs, and guide
            patients through the digital portal.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="rounded-3xl border border-brand-900/10 bg-surface p-6 shadow-brand-900/5">
                <detail.icon className="h-8 w-8 text-teal-500" />
                <p className="mt-4 text-sm font-semibold text-brand-600">{detail.label}</p>
                {detail.href ? (
                  <a href={detail.href} className="mt-1 block text-lg font-semibold text-brand-900 hover:text-teal-500">
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-semibold text-brand-900">{detail.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-brand-900/10 bg-brand-50 p-8 shadow-lg shadow-brand-900/5">
          <h3 className="text-xl font-semibold text-brand-900">Request a partnership callback</h3>
          <p className="mt-2 text-sm text-brand-600">
            Provide your contact information and our team will reach out within one business day.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-brand-700" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Dr. Sarah Al-Harbi"
                className="mt-2 w-full rounded-2xl border border-brand-900/10 bg-white px-4 py-3 text-sm text-brand-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-700" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="name@hospital.sa"
                className="mt-2 w-full rounded-2xl border border-brand-900/10 bg-white px-4 py-3 text-sm text-brand-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-700" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Share how we can support your facility"
                className="mt-2 w-full rounded-2xl border border-brand-900/10 bg-white px-4 py-3 text-sm text-brand-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30"
            >
              Submit request
            </button>
            <p className="text-xs text-brand-500">
              This form stores data locally for demonstration. A production integration would connect to your CRM or
              ticketing platform.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
