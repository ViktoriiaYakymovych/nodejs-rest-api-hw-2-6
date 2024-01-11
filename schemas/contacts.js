const Joi = require("joi");

const PHONE_PATTERN = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const contactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().pattern(EMAIL_PATTERN).required(),
  phone: Joi.string().pattern(PHONE_PATTERN).required(),
});

module.exports = {
  contactSchema,
};
