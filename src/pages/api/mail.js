import nodemailer from 'nodemailer';

const Mail = async (req, res) => {
  if (req.method === 'POST') {
    const { subject, visitor_name, visitor_email, visitor_phone, total_adults, total_children, checkin, checkout, visitor_message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Create email data
    const mailData = {
      from: visitor_email,
      to: 'jlloris077@gmail.com',
      subject: subject,
      html: `
      <p><strong>Name:</strong> ${visitor_name}</p>
      <p><strong>Email:</strong> ${visitor_email}</p>
      <p><strong>Phone:</strong> ${visitor_phone}</p>
      <p><strong>Adults:</strong> ${total_adults}</p>
      <p><strong>Children:</strong> ${total_children}</p>
      <p><strong>Check-in Date:</strong> ${checkin}</p>
      <p><strong>Check-out Date:</strong> ${checkout}</p>
      <p><strong>Message:</strong> ${visitor_message}</p>
    `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailData);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Email sending failed' });
    }
  } else {
    res.status(405).end();
  }
};

export default Mail;