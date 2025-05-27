/*
id string pk
owner ObjectId users
content string
createdAt Date
updatedAt Date
*/

import mongoose, { Schema } from "mongoose";

// Tweet Schema
const tweetSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
