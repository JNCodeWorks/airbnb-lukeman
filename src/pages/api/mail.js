import nodemailer from 'nodemailer';

const Mail = async (req, res) => {
  if (req.method === 'POST') {
    const { subject, visitor_name, visitor_email, visitor_phone, total_adults, total_children, checkin, checkout, total_price, visitor_message, image } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.RESERVATION_EMAIL,
        pass: process.env.RESERVATION_EMAIL_PASSWORD,
      },
    });

    // Create email data
    const mailData = {
      from: visitor_email,
      to: 'reservations@lukemanbnb.com',
      subject: subject,
      html: `
      <p>I would like to make a reservation request for the <strong>${subject}</strong>. Here are the details:</p>
      <p><strong>Name:</strong> ${visitor_name}</p>
      <p><strong>Email:</strong> ${visitor_email}</p>
      <p><strong>Phone:</strong> ${visitor_phone}</p>
      <p><strong>Adults:</strong> ${total_adults}</p>
      <p><strong>Children:</strong> ${total_children}</p>
      <p><strong>Check-in Date:</strong> ${checkin}</p>
      <p><strong>Check-out Date:</strong> ${checkout}</p>
      <p><strong>Total Price:</strong>KES ${total_price}</p>
      <p><strong>Message:</strong> ${visitor_message}</p>
    `,

    attachments: [
      {
        filename: 'reservation_image.jpg', // File name to display in the email
        path: image, // Path or URL to the image
      },
    ],

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
