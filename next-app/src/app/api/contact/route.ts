import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter (use your SMTP credentials)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"StackMates" <${process.env.SMTP_USER}>`,
      to: email,
      bcc: process.env.SMTP_BCC,
      subject: "We’ve Received Your Message!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f7f7f7; border-radius: 8px;">
          <h2 style="color: #6C63FF;">Hello ${name},</h2>
          <p>Thank you for reaching out to <strong>StackMates</strong>! We have received your message and will get back to you as soon as possible.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p><strong>Your Message:</strong></p>
          <p style="background: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #ddd;">${message}</p>
          <p>We appreciate you contacting us. If you need urgent assistance, please reply to this email.</p>
          <p style="margin-top: 30px;">— The StackMates Team</p>
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
