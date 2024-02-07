const { Contact } = require("../../models/contacts");
const { ctrlWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query; // витягуємо параметр favorite
  const skip = (page - 1) * limit;
  const query = { owner }; // створюємо об'єкт запиту

  if (favorite !== undefined) {
    query.favorite = favorite;
  } // якщо присутнє поле favorite, додаємо його до запиту

  const listContacts = await Contact.find(query, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "_id, email");
  res.json(listContacts);
};

module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
