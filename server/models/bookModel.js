const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        finished: {
            type: Boolean,
            required: true,
        },
        thoughts: {
            type: String,
            required: false,
        },
        user_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Book", bookSchema);
