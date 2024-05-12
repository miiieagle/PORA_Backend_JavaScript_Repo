const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'],
        },

        password: {type: String, required: true},
    },
    {timestamps: true}
);
module.exports = mongoose.model("Users", userSchema);