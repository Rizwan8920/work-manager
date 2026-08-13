const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name Required !!"],
  },
  email: {
    type: String,
    required: [true, "Email Required !!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password Required !!"],
  },
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
