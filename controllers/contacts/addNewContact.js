const { Contact } = require("../../models/contacts");
const { ctrlWrapper } = require("../../helpers");

const addNewContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

module.exports = module.exports = {
  addNewContact: ctrlWrapper(addNewContact),
};
