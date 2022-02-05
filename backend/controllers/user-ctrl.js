const User = require("../models/user-model");

createUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a user",
    });
  }

  const user = new User({
    totalSpent: body.totalSpent,
    monthLimit: body.monthLimit,
    weekLimit: body.weekLimit,
    totalProducts: body.totalProducts,
  });
  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }
  try {
    await user.save();
    res.send({
      message: "Welcome to idni!",
    });
  } catch (error) {
    return res.status(400).json({
      error,
      message: "idni user not created!",
    });
  }
};

updateUserSettings = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: req.params.id }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    (user.totalSpent = body.totalSpent),
      (user.monthLimit = body.monthLimit),
      (user.weekLimit = body.weekLimit),
      (user.totalProducts = body.totalProducts),
      (user.purchases = body.purchases);
    user.blacklist.push(body.blacklist);

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        id: user._id,
        message: "user updated!",
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updatePurchases = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: req.params.id }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    (user.totalSpent = body.totalSpent),
      (user.monthLimit = body.monthLimit),
      (user.weekLimit = body.weekLimit),
      (user.totalProducts = body.totalProducts),
      user.purchases.push(body.purchases);
    user.blacklist = body.blacklist;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        id: user._id,
        message: "user updated!",
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

deleteUser = async (req, res) => {
  await User.findOne({ _id: req.params.id }, async (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }

    await user.remove();

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};
