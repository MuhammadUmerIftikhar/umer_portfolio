import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "sardar.umer6789@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0e0e18;color:#e2e8f0;border-radius:12px;">
          <h2 style="color:#a855f7;margin-bottom:4px;">New message from your portfolio</h2>
          <hr style="border-color:#2d2d4a;margin:16px 0"/>
          <p style="margin:8px 0"><strong style="color:#c4b5fd">Name:</strong> ${name}</p>
          <p style="margin:8px 0"><strong style="color:#c4b5fd">Email:</strong> <a href="mailto:${email}" style="color:#818cf8">${email}</a></p>
          <p style="margin:8px 0"><strong style="color:#c4b5fd">Subject:</strong> ${subject}</p>
          <hr style="border-color:#2d2d4a;margin:16px 0"/>
          <p style="margin:8px 0;white-space:pre-wrap">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
