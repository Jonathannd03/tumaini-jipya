import { d as defineEventHandler, r as readBody, c as createError, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import { Resend } from 'resend';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const contact_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, email, subject, message, phone } = body;
    if (!name || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields"
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid email format"
      });
    }
    const config = useRuntimeConfig();
    const resendApiKey = config.resendApiKey || process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: "Email service not configured"
      });
    }
    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.emails.send({
      from: "Tumaini Jipya <onboarding@resend.dev>",
      to: ["ndingajonathan96@gmail.com"],
      replyTo: email,
      subject: `Kontaktformular: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            Neue Nachricht vom Kontaktformular
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>E-Mail:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Telefon:</strong> ${phone}</p>` : ""}
            <p style="margin: 10px 0;"><strong>Betreff:</strong> ${subject}</p>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Nachricht:</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Diese Nachricht wurde \xFCber das Kontaktformular auf www.tumaini-jipya.org gesendet.</p>
          </div>
        </div>
      `
    });
    if (error) {
      console.error("Resend API error:", error);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to send email"
      });
    }
    return {
      success: true,
      message: "Email sent successfully",
      id: data == null ? void 0 : data.id
    };
  } catch (error) {
    console.error("Error sending email:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Failed to send email"
    });
  }
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
