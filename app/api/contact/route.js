import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, eventDate, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission - Studio In Wedding Photography",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding: 20px 0; background-color: #f8f9fa; border-bottom: 2px solid #000; }
            .logo { max-width: 200px; height: auto; }
            .content { padding: 30px 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #000; display: inline-block; min-width: 120px; }
            .message-box { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #000; margin-top: 20px; }
            .footer { text-align: center; padding: 20px 0; background-color: #000; color: #fff; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://studioinweddingphotography-in.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsinwhite.aadb52ea.png&w=3840&q=75" alt="Studio In Wedding Photography" class="logo">
              <h1 style="color: #000; margin: 10px 0;">New Contact Inquiry</h1>
            </div>

            <div class="content">
              <p>Dear Studio In Team,</p>
              <p>You have received a new contact form submission. Here are the details:</p>

              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>

              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>

              <div class="field">
                <span class="label">Phone:</span> ${phone}
              </div>

              <div class="field">
                <span class="label">Event Date:</span> ${eventDate}
              </div>

              <div class="message-box">
                <strong>Message:</strong><br>
                ${message.replace(/\n/g, "<br>")}
              </div>

              <p>Please respond to this inquiry as soon as possible.</p>
              <p>Best regards,<br>Studio In</p>
            </div>

            <div class="footer">
              <p>© 2024 Studio In Wedding Photography | Chennai, Tamil Nadu, India</p>
              <p>Contact: +91 98765 43210 | hello@studioinweddingphotography.in</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
