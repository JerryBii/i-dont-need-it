const User = require("../models/user-model");
const userId = "61fef2c6070d470ba34b9d70";

createUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a user",
    });
  }

  console.log(body);
  const user = new User({
    weeklySpent: body.weeklySpent,
    monthlySpent: body.monthlySpent,
    monthlyLimit: body.monthlyLimit,
    weeklyLimit: body.weeklyLimit,
    totalProducts: body.totalProducts,
    weeklyItemsNotPurchased: body.weeklyItemsNotPurchased,
    monthlyItemsNotPurchased: body.monthlyItemsNotPurchased,
    weeklySaved: body.weeklySaved,
    monthlySaved: body.monthlySaved,
  });
  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }
  try {
    await user.save();
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(400).json({
      error,
      message: "idni user not created!",
    });
  }
};

getUser = async (req, res) => {
  await User.findOne({ _id: userId }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `user not found` });
    }
    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

updateWeeklySpent = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.weeklySpent = body.weeklySpent;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateMonthlySpent = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.monthlySpent = body.monthlySpent;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateMonthlyLimit = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.monthlyLimit = body.monthlyLimit;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateWeeklyLimit = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.weeklyLimit = body.weeklyLimit;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateTotalProducts = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.totalProducts = body.totalProducts;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateWeeklyItemsNotPurchased = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.weeklyItemsNotPurchased = body.weeklyItemsNotPurchased;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateMonthlyItemsNotPurchased = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.monthlyItemsNotPurchased = body.monthlyItemsNotPurchased;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateWeeklySaved = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.weeklySaved = body.weeklySaved;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateMonthlySaved = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.monthlySaved = body.monthlySaved;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
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

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.purchases.push(body);

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: "user not updated!",
      });
    }
  });
};

updateAvoidanceList = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: userId }, async (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "user not found!",
      });
    }
    user.avoidanceList = body.avoidanceList;

    try {
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
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
  await User.findOne({ _id: id }, async (err, user) => {
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

module.exports = {
  createUser,
  getUser,
  updateWeeklySpent,
  updateMonthlySpent,
  updateMonthlyLimit,
  updateWeeklyLimit,
  updateTotalProducts,
  updateWeeklyItemsNotPurchased,
  updateMonthlyItemsNotPurchased,
  updateWeeklySaved,
  updateMonthlySaved,
  updatePurchases,
  updateAvoidanceList,
  deleteUser,
};
