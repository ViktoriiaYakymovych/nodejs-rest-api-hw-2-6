const express = require("express");

const ctrl = require("../../controllers/contacts");
const { validateContactBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactById);

router.post(
  "/",
  validateContactBody(schemas.contactSchema),
  ctrl.addNewContact
);

router.delete("/:contactId", ctrl.deleteContactById);

router.put(
  "/:contactId",
  validateContactBody(schemas.contactSchema),
  ctrl.updateContactById
);

module.exports = router;
