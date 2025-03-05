import nodemailer from 'nodemailer';
import multer from 'multer';
import { promisify } from 'util';

const upload = multer({ storage: multer.memoryStorage() });
const uploadMiddleware = promisify(upload.single('resume'));

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await uploadMiddleware(req, res);
    const { firstName, lastName, email, phone, position, experience, message } = req.body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      // Configure your email service here
      host: 'your-smtp-host',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    // Send email
    await transporter.sendMail({
      from: 'your-email@example.com',
      to: 'hr@rvtechlearn.com',
      subject: `New Job Application: ${position} - ${firstName} ${lastName}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      attachments: req.file ? [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
        },
      ] : [],
    });

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ message: 'Failed to submit application' });
  }
}
