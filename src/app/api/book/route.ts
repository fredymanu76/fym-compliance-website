import { NextRequest, NextResponse } from "next/server";

const FIRMMAIL_API_URL =
  process.env.FIRMMAIL_API_URL ||
  "https://mail.reg-nexus.com/api/public/contact-form";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      serviceType,
      date,
      dateFormatted,
      time,
      name,
      email,
      company,
      notes,
      turnstileToken,
    } = body;

    if (!serviceType || !date || !time || !name || !email) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the security check" },
        { status: 400 }
      );
    }

    // Build structured email body
    const messageParts = [
      `BOOKING REQUEST`,
      ``,
      `Service: ${serviceType}`,
      `Date: ${dateFormatted || date}`,
      `Time: ${time} (UK)`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
    ];

    if (company) {
      messageParts.push(`Company: ${company}`);
    }

    if (notes) {
      messageParts.push(``, `Notes:`, notes);
    }

    messageParts.push(
      ``,
      `---`,
      `Submitted via fymcompliancelimited.com/book`
    );

    const firmMailRes = await fetch(FIRMMAIL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://fymcompliancelimited.com",
      },
      body: JSON.stringify({
        siteDomain: "fymcompliancelimited.com",
        name,
        email,
        subject: `Booking Request: ${serviceType} — ${dateFormatted || date} at ${time}`,
        message: messageParts.join("\n"),
        turnstileToken,
      }),
    });

    if (!firmMailRes.ok) {
      console.error("FirmMail API error:", await firmMailRes.text());
      return NextResponse.json(
        { error: "Failed to submit booking request. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
