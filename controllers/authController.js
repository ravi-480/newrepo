const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "Success",
    data: {
      user: newUser,
    },
  });
});


module.exports = {signup}