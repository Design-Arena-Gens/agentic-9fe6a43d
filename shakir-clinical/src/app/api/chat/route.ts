import { NextResponse } from "next/server";

const intents = [
  {
    keywords: ["hours", "timing", "open", "working"],
    reply:
      "Our central laboratory operates 24/7 for hospitals. Walk-in sample collection is available Saturday to Thursday, 7:00 AM – 10:00 PM.",
  },
  {
    keywords: ["location", "where", "address", "riyadh"],
    reply:
      "The flagship Shakir Clinical Laboratory is located on King Fahd Road, Riyadh with satellite labs in Jeddah, Dammam, and Abha.",
  },
  {
    keywords: ["report", "results", "portal", "access"],
    reply:
      "You can access your digital reports by visiting the Patient Portal and signing in with your Patient ID and date of birth. Results are published as soon as they are verified by our pathologists.",
  },
  {
    keywords: ["home", "collection", "pickup", "mobile"],
    reply:
      "We provide home sample collection across major cities. Book a visit via the contact form or call +966 11 555 1234 at least 24 hours in advance.",
  },
  {
    keywords: ["insurance", "coverage", "pay", "payment"],
    reply:
      "Shakir Clinical Laboratory partners with most major insurance providers in the Kingdom. Our team can confirm coverage and provide upfront quotations before collection.",
  },
];

const defaultReply =
  "I can help with service details, report access, insurance partners, or home collection. For urgent medical assistance, please call our hotline at +966 11 555 1234.";

export async function POST(request: Request) {
  try {
    const { message } = (await request.json()) as { message?: string };

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please share a question so I can assist you." },
        { status: 400 },
      );
    }

    const normalized = message.toLowerCase();

    const matched = intents.find((intent) =>
      intent.keywords.some((keyword) => normalized.includes(keyword)),
    );

    const reply = matched ? appendClosing(matched.reply) : defaultReply;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error", error);
    return NextResponse.json({ reply: defaultReply }, { status: 500 });
  }
}

function appendClosing(reply: string) {
  const suffix = "\n\nWould you like me to connect you with our clinical liaison team?";
  return `${reply}${suffix}`;
}
