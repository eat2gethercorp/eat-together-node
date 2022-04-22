const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: ["user", "admin", "owner"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("users", UserSchema);
