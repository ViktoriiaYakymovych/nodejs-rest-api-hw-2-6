const { Contact } = require("../../models/contacts");
const { HttpError, ctrlWrapper } = require("../../helpers");

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

module.exports = module.exports = {
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
