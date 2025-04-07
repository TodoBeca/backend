const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (email, token, type = "verification") => {
  let subject, html;

  if (type === "reset") {
    subject = "Recuperación de contraseña de cuenta en TodoBeca.com";
    html = `<h2>Recuperá tu contraseña</h2>
           <p>Para cambiar tu contraseña, haz clic en el siguiente enlace:</p>
           <a href="${process.env.FRONTEND_URL}/reset-password.html" onclick="sessionStorage.setItem('resetToken', '${token}')">Restablecer contraseña</a>
           <p>Este enlace expirará en 1 hora.</p>`;
  } else {
    subject = "Verificación de email en TodoBeca.com";
    html = `<h2>Verificá tu email</h2>
           <p>Para completar tu registro, haz clic en el siguiente enlace:</p>
           <a href="${process.env.FRONTEND_URL}/verify-email" onclick="sessionStorage.setItem('verificationToken', '${token}')">Verificar Email</a>`;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    html: html,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
