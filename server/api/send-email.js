import nodemailer from 'nodemailer';
// import fetch from 'node-fetch';

export default async function (req, res) {
  console.log("Request received at send-email API");

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, city, company, message, terms /*, recaptcha*/ } = req.body;

  if (!name || !email || !phone || !city || !company || !message || !terms /* || !recaptcha */) {
    console.log("Missing fields: ", req.body);
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'All fields are required' }));
    return;
  }

  // const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6Lc3T3AaAAAAANkOM-TtYEPo_u9LpFDwqi9k1Dza&response=${recaptcha}`, {
  //   method: 'POST'
  // });
  // const recaptchaData = await recaptchaResponse.json();

  // if (!recaptchaData.success) {
  //   console.log("Invalid reCAPTCHA: ", recaptchaData);
  //   res.writeHead(400, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify({ message: 'Invalid reCAPTCHA' }));
  //   return;
  // }

  console.log("Request body: ", req.body);

  const transporter = nodemailer.createTransport({
    host: 'mail.gsstudio.com.br',
    port: 465,
    secure: true,
    auth: {
      user: 'noreply@gsstudio.com.br',
      pass: 'Agenciagsstudio1993#@!'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: 'noreply@gsstudio.com.br',
    to: 'giovannistr@gmail.com',
    subject: `Site gs studio`,
    html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Marketing</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Montserrat', sans-serif; background-color: #f4f4f4; font-size: 14px;">
          <div style="background-color: #000; text-align: center; padding: 20px 0;">
              <img src="https://s3.gsstudio.com.br/images-email-marketing/logotipogssstudio.png" alt="Logo da Empresa" style="max-width: 200px;">
          </div>
          <div style="max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); padding: 40px;">
              <p>Nome: ${name}</p>
              <p>Email: ${email}</p>
              <p>Celular: ${phone}</p>
              <p>Cidade: ${city}</p>
              <p>Empresa: ${company}</p>
              <p>Mensagem: ${message}</p>
              <p>Termos aceitos: ${terms ? 'Sim' : 'Não'}</p>
          </div>
          <div style="background-color: #000; text-align: center; color: #fff; padding: 20px 0;">
              <p>Dúvidas?</p>
              <p><b><a href="https://wa.me/551640422901?text=Ol%C3%A1%2C+gostaria+de+tirar+algumas+d%C3%BAvidas." style="color: #fff; text-decoration: none;">Clique aqui e fale conosco.</a></b></p>
              <div style="margin: 25px 0;">
                  <a href="https://www.instagram.com/agenciagsstudio/" target="_blank" style="margin: 0 10px;">
                      <img src="https://s3.gsstudio.com.br/gsstudio/social%20icons/instagram-light.webp" alt="Instagram" style="width: 30px; height: 30px;">
                  </a>
                  <a href="https://www.linkedin.com/company/agenciagsstudio/" target="_blank" style="margin: 0 10px;">
                      <img src="https://s3.gsstudio.com.br/gsstudio/social%20icons/linkedin-light.webp" alt="LinkedIn" style="width: 30px; height: 30px;">
                  </a>
              </div>
              <p><a href="https://www.gsstudio.com.br/politica-de-privacidade" target="_blank" style="color: #fff; text-decoration: none;">política de privacidade</a> | <a href="https://gsstudio.com.br" style="color: #fff; text-decoration: none;">gsstudio.com.br</a> | <a href="mailto:hello@gsstudio.com.br" style="color: #fff; text-decoration: none;">hello@gsstudio.com.br</a></p>
          </div>
      </body>
      </html>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Formulário recebido e e-mail enviado com sucesso' }));
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Erro ao enviar e-mail', error }));
  }
};
