import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "sardar.umer6789@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
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
          <hr style="border-color:#2d2d4a;margin:16px 0"/>
          <p style="color:#6b7280;font-size:12px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
