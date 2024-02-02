const { getAllContacts } = require("./getAllContacts");
const { getContactById } = require("./getContactById");
const { addNewContact } = require("./addNewContact");
const { deleteContactById } = require("./deleteContactById");
const { updateContactById } = require("./updateContactById");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContactById,
  updateContactById,
  updateStatusContact,
};
