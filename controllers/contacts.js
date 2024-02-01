const { Contact } = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const listContacts = await Contact.find({}, "-createdAt -updatedAt");
  res.json(listContacts);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  // const contact = await Contact.findOne({ _id: contactId });
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

const addNewContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(contactId);
  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const updetedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!updetedContact) {
    throw HttpError(404, "Not found");
  }
  res.json(updetedContact);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const updetedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
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
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
