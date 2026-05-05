import { NextRequest, NextResponse } from "next/server";

const FIRMMAIL_API_URL =
  process.env.FIRMMAIL_API_URL ||
  "https://mail.reg-nexus.com/api/public/contact-form";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, turnstileToken } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the security check" },
        { status: 400 }
      );
    }

    // Forward to FirmMail API — FirmMail handles Turnstile verification server-side
    // Origin header required: FirmMail validates the calling site via Origin
    const firmMailRes = await fetch(FIRMMAIL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": "https://fymcompliancelimited.com",
      },
      body: JSON.stringify({
        siteDomain: "fymcompliancelimited.com",
        name,
        email,
        subject,
        message,
        turnstileToken,
      }),
    });

    if (!firmMailRes.ok) {
      console.error("FirmMail API error:", await firmMailRes.text());
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
