
const nodemailer = require('nodemailer');

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { formData } = req.body;

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: formData.visitor_email, // Use the visitor's email as the sender
        to: 'nyangejorris@gmail.com',
        subject: 'Reservation Request',
        html: `
          <p>Name: ${formData.visitor_name}</p>
          <p>Email: ${formData.visitor_email}</p>
          <p>Phone: ${formData.visitor_phone}</p>
          <p>Adults: ${formData.total_adults}</p>
          <p>Children: ${formData.total_children}</p>
          <p>Check-in Date: ${formData.checkin}</p>
          <p>Check-out Date: ${formData.checkout}</p>
          <p>Total Price: $${formData.totalPrice.toFixed(2)}</p>
        `,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);

      console.log('Email sent:', info.response);

      // Respond with a success message
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ error: 'Email sending failed', message: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
