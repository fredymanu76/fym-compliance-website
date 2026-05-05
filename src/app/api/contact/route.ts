import { NextRequest, NextResponse } from "next/server";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || "";
const FIRMMAIL_API_URL = process.env.FIRMMAIL_API_URL || "https://mail.reg-nexus.com/api/hosting/contact";
const FIRMMAIL_SITE_ID = process.env.FIRMMAIL_SITE_ID || "";

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

    // Verify Turnstile token
    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: TURNSTILE_SECRET,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData = await turnstileRes.json();
    if (!turnstileData.success) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 403 }
      );
    }

    // Forward to FirmMail API
    const firmMailRes = await fetch(FIRMMAIL_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        siteId: FIRMMAIL_SITE_ID,
        name,
        email,
        subject,
        message,
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
