/*
id string pk
name string
description string
videos ObjectId[] videos
owner ObjectId users
createdAt Date
updatedAt Date
*/

import mongoose, { Schema } from "mongoose";

// Playlist Schema
const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
