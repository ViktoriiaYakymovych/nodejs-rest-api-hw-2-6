const { HttpError, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models/users");

const updateSubscription = async (req, res) => {
  const subscriptionEnum = User.schema.obj.subscription.enum;
  const subscriptionReq = req.body.subscription;
  const { _id: userId } = req.user;

  if (!subscriptionEnum.includes(subscriptionReq)) {
    throw HttpError(400, "Invalid subscription value");
  }

  const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
  });

  if (!updatedUser) {
    throw HttpError(404, "User is not found");
  }

  res.json(updatedUser);
};

module.exports = { updateSubscription: ctrlWrapper(updateSubscription) };
