import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"StackMates | Build Your Vision with Expert Freelancing" <${process.env.SMTP_USER}>`,
      to: email,
      bcc: process.env.SMTP_BCC,
      subject: "We’ve Received Your Message!",
      html: `
        <div style="
          font-family: 'Arial', sans-serif;
          max-width: 600px;
          margin: auto;
          background: linear-gradient(135deg, #0f172a, #1e293b, #334155);
          color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        ">
          <div style="
            background: linear-gradient(90deg, #6C63FF, #8B5CF6);
            padding: 20px;
            text-align: center;
          ">
            <h1 style="margin:0; font-size:24px;">StackMates</h1>
            <p style="margin:5px 0 0; font-size:14px;">Build Your Vision with Expert Freelancing</p>
          </div>

          <div style="padding: 20px; line-height: 1.6;">
            <h2 style="color: #6C63FF; margin-bottom: 10px;">Hello ${name},</h2>
            <p>Thank you for reaching out to <strong>StackMates</strong>! We have received your message and will get back to you as soon as possible.</p>

            <hr style="border: none; border-top: 1px solid #444; margin: 20px 0;">

            <p><strong>Your Message:</strong></p>
            <div style="
              background: rgba(255,255,255,0.05);
              padding: 12px;
              border-radius: 6px;
              border: 1px solid rgba(255,255,255,0.2);
              font-style: italic;
            ">
              ${message}
            </div>

            <p style="margin-top: 20px;">We appreciate you contacting us. If you need urgent assistance, please reply to this email.</p>

            <p style="margin-top: 30px; font-weight: bold;">— The StackMates Team</p>
          </div>

          <div style="
            background: rgba(255,255,255,0.05);
            padding: 10px 20px;
            text-align: center;
            font-size: 12px;
            color: #aaa;
          ">
            &copy; ${new Date().getFullYear()} StackMates. All rights reserved.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
