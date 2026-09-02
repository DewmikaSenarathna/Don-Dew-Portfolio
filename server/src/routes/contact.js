import { Router } from "express";
import { body, validationResult } from "express-validator";
import nodemailer from "nodemailer";

const router = Router();

let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null; // Email isn't configured yet — handled gracefully below.
  }
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

const validators = [
  body("name").trim().isLength({ min: 2, max: 100 }).withMessage("Name must be 2–100 characters."),
  body("email").trim().isEmail().withMessage("Enter a valid email address.").normalizeEmail(),
  body("subject").trim().isLength({ min: 2, max: 150 }).withMessage("Subject must be 2–150 characters."),
  body("message").trim().isLength({ min: 10, max: 2000 }).withMessage("Message must be 10–2000 characters."),
  // Honeypot field — real users never fill this in; bots usually do.
  body("company").optional({ checkFalsy: true }).isEmpty().withMessage("Submission rejected."),
];

router.post("/", validators, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ ok: false, error: errors.array()[0].msg });
    }

    const { name, email, subject, message } = req.body;
    const mailer = getTransporter();

    if (!mailer) {
      // No SMTP configured — log it server-side so nothing is silently lost
      // during setup, and tell the client honestly what happened.
      console.log("[contact] SMTP not configured. Submission received:", {
        name,
        email,
        subject,
        message,
      });
      return res.status(200).json({
        ok: true,
        delivered: false,
        note: "Message received, but email delivery isn't configured on the server yet.",
      });
    }

    await mailer.sendMail({
      from: `"Don Dew Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(
        message
      ).replace(/\n/g, "<br/>")}</p>`,
    });

    res.status(200).json({ ok: true, delivered: true });
  } catch (err) {
    next(err);
  }
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default router;
