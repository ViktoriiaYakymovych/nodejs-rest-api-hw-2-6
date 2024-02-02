const { Contact } = require("../../models/contacts");
const { ctrlWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const listContacts = await Contact.find({}, "-createdAt -updatedAt");
  res.json(listContacts);
};

module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
