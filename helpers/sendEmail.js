const nodemailer = require("nodemailer");
require("dotenv").config();
const { META_PASSWORD } = process.env;

const sendEmail = async (data) => {
  // створюємо об'єкт налаштувань для nodemailer
  const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 2525, 465 - захищений
    secure: true,
    auth: {
      user: "viktoriia.yakymovych@meta.ua",
      pass: META_PASSWORD,
    },
  };

  // створюємо транспорт за допомогою об'єкту
  const transport = nodemailer.createTransport(nodemailerConfig);

  // створюємо email
  const email = { ...data, from: "viktoriia.yakymovych@meta.ua" };
  
  await transport
    .sendMail(email)
    .then(() => {
      console.log("Email send success");
    })
    .catch((err) => {
      console.log(err.message);
    });

  return true;
};

module.exports = sendEmail;
