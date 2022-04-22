const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    locationId: {
      type: String,
    },
    rating: {
      average: Number,
      votes: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

RestaurantSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("restaurants", RestaurantSchema);
