const express = require("express");

const ctrl = require("../../../controllers/contacts");
const {
  validateBody,
  isValidId,
  authenticate,
} = require("../../../middlewares");
const { schemas } = require("../../../models/contacts");

const router = express.Router();

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addNewContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContactById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
