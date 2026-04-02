import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    password: {
      type: String,
      required: false,
      minlength: 6,
    },
    profilepic: {
      type: String,
      required: true,
      default: "",
    },
    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
