const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const snippetSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    code: { type: String },
    user: { type: ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

const Snippet = mongoose.model("snippet", snippetSchema);

module.exports = Snippet;
