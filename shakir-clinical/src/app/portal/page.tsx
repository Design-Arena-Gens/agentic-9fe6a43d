"use client";

import { FormEvent, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import type { PatientReport } from "@/data/reportData";

export default function PortalPage() {
  const [patientId, setPatientId] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PatientReport | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setData(null);
    setLoading(true);

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientId, dob }),
      });

      const payload = await response.json();
      if (!response.ok) {
        setError(payload.error ?? "Unable to locate your records. Please verify the details.");
        return;
      }

      setData(payload.patient as PatientReport);
    } catch (fetchError) {
      console.error(fetchError);
      setError("Unexpected error retrieving your records. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (reportId: string) => {
    const link = document.createElement("a");
    link.href = "/reports/sample-report.pdf";
    link.download = `${reportId}.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-white pb-20">
      <div className="border-b border-brand-900/10 bg-white/80">
        <Container className="py-16 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-600">
            <ShieldCheck className="h-4 w-4" /> Secure patient portal
          </p>
          <h1 className="mt-6 text-4xl font-semibold text-brand-950 sm:text-5xl">
            Access your clinical reports digitally
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-600">
            Sign in with your Patient ID and date of birth to view recent laboratory results, download encrypted PDFs,
            and share findings with your physician instantly.
          </p>
        </Container>
      </div>

      <Container className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-brand-900/10 bg-white p-8 shadow-xl shadow-brand-900/5"
        >
          <h2 className="text-xl font-semibold text-brand-900">Patient verification</h2>
          <p className="mt-2 text-sm text-brand-600">
            For security, please enter the Patient ID provided on your collection receipt and your date of birth.
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="patient-id" className="text-sm font-semibold text-brand-700">
                Patient ID
              </label>
              <input
                id="patient-id"
                type="text"
                value={patientId}
                onChange={(event) => setPatientId(event.target.value)}
                placeholder="e.g. SCL-102938"
                className="mt-2 w-full rounded-2xl border border-brand-900/10 bg-brand-50 px-4 py-3 text-sm text-brand-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                required
              />
            </div>
            <div>
              <label htmlFor="patient-dob" className="text-sm font-semibold text-brand-700">
                Date of birth
              </label>
              <input
                id="patient-dob"
                type="date"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-brand-900/10 bg-brand-50 px-4 py-3 text-sm text-brand-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:shadow-xl hover:shadow-teal-500/40 disabled:opacity-60"
          >
            {loading ? "Verifying…" : "View my reports"}
          </button>
          <p className="mt-4 text-xs text-brand-500">
            By accessing the portal you agree to our privacy policy and confirm you are authorized to view this data.
          </p>
        </form>

        <div className="space-y-6">
          {!data && !error ? (
            <div className="rounded-3xl border border-dashed border-teal-500/30 bg-teal-500/10 p-10 text-center text-brand-700">
              Enter your details to retrieve available reports. For help, contact the patient support desk at
              <br />
              <a href="tel:+966115551234" className="font-semibold text-teal-700">
                +966 11 555 1234
              </a>
              .
            </div>
          ) : null}

          {error ? (
            <div className="rounded-3xl border border-red-400/40 bg-red-50 p-6 text-sm text-red-600">
              {error}
            </div>
          ) : null}

          {data ? (
            <div className="space-y-6">
              <div className="rounded-3xl border border-brand-900/10 bg-white p-6 shadow-md">
                <div className="flex flex-col gap-2 text-sm text-brand-600 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-teal-600">Patient</p>
                    <p className="text-lg font-semibold text-brand-900">{data.name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-teal-600">Clinician</p>
                    <p className="text-lg font-semibold text-brand-900">{data.clinician}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-teal-600">Last visit</p>
                    <p className="text-lg font-semibold text-brand-900">{data.lastVisit}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {data.reports.map((report) => (
                  <article
                    key={report.id}
                    className="rounded-3xl border border-brand-900/10 bg-white p-6 shadow-md shadow-brand-900/5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-brand-900">{report.testName}</p>
                        <p className="text-xs text-brand-500">
                          Collected {report.collectedAt} • Status: {report.status}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleDownload(report.id)}
                          className="rounded-full border border-teal-500/30 px-4 py-2 text-xs font-semibold text-teal-600 hover:bg-teal-500/10"
                        >
                          Download PDF
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-brand-600">{report.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
