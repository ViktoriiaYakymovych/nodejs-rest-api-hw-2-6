const express = require("express");

const ctrl = require("../../../controllers/contacts");
const { validateContactBody, isValidId } = require("../../../middlewares");
const { schemas } = require("../../../models/contacts");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateContactBody(schemas.addSchema), ctrl.addNewContact);

router.delete("/:contactId", isValidId, ctrl.deleteContactById);

router.put(
  "/:contactId",
  isValidId,
  validateContactBody(schemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateContactBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
