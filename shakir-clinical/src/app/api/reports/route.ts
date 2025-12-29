import { NextResponse } from "next/server";
import { patientReports } from "@/data/reportData";

export async function POST(request: Request) {
  try {
    const { patientId, dob } = (await request.json()) as {
      patientId?: string;
      dob?: string;
    };

    if (!patientId || !dob) {
      return NextResponse.json(
        { error: "Patient ID and date of birth are required." },
        { status: 400 },
      );
    }

    const patient = patientReports.find(
      (record) =>
        record.patientId.toLowerCase() === patientId.toLowerCase().trim() &&
        record.dob === dob.trim(),
    );

    if (!patient) {
      return NextResponse.json(
        { error: "We could not find records matching those details." },
        { status: 404 },
      );
    }

    return NextResponse.json({ patient });
  } catch (error) {
    console.error("Report lookup failed", error);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
