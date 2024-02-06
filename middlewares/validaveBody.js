const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const method = req.route.stack[0].method;
    let message = "";

    const { error } = schema.validate(req.body);
    if (error) {
      const failedField = error.details[0].context.label;

      if (method === "post") {
        message = `missing required ${failedField} field`;
      } else if (method === "put") {
        message = "missing fields";
      }
      next(HttpError(400, message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
