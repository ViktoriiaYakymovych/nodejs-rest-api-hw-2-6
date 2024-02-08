const Jimp = require("jimp");
const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models/users");
const { ctrlWrapper, HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id: userId } = req.user;

  if (req.file === undefined) {
    throw HttpError(404, "Image not found");
  }

  const { path: tmpUpload, originalname } = req.file;
  const fileName = `${userId}_${originalname}`;

  const resultUpload = path.join(avatarsDir, fileName);

  // resize image to 250*250 by Jimp
  const image = await Jimp.read(tmpUpload);
  await image.resize(250, 250).writeAsync(tmpUpload);

  // async rename and move image from /tmp to /public/avatars
  await fs.rename(tmpUpload, resultUpload);

  const avatarURL = path.join("avatars", fileName);

  await User.findByIdAndUpdate(userId, { avatarURL });

  res.json({ avatarURL });
};

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
