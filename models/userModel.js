const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name field must required"],
  },
  email: {
    type: String,
    required: [true, "A name field must required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password must required"],
    minlength: 8,
  },
  cnfPassword: {
    type: String,
    required: [true, "password required"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password are not same!!!",
    },
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
