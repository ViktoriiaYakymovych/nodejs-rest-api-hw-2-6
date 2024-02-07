const { Contact } = require("../../models/contacts");
const { HttpError, ctrlWrapper } = require("../../helpers");

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(contactId);
  if (!deletedContact) {
    throw HttpError(404);
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = {
  deleteContactById: ctrlWrapper(deleteContactById),
};
