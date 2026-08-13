const { Schema, default: mongoose } = require("mongoose");

const workSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title Required !!"],
  },
  description: {
    type: String,
    required: [true, "Description Required !!"],
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Work =
  mongoose.models.works || mongoose.model("works", workSchema);
