const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const listContacts = await contacts.listContacts();
  res.json(listContacts);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contacts.getContactById(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

const addNewContact = async (req, res) => {
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await contacts.removeContact(contactId);
  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const updetedContact = await contacts.updateContact(contactId, req.body);
  if (!updetedContact) {
    throw HttpError(404, "Not found");
  }
  res.json(updetedContact);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addNewContact: ctrlWrapper(addNewContact),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
};
