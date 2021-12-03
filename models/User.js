const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: "String",
        required: true
    },
    firstName: {
        type: "String",
        required: true,
        minlength: 2,
        maxLength: 12
    },
    lastName: {
        type: "String",
        required: true,
        minlength: 2,
        maxLength: 12
    },
    password: {
        type: "String",
        required: true,
        minlength: 4,
        maxLength: 16
    }
});

userSchema.set("toJSON", {
    transform: (doc, ret, opt) => {
      delete ret["password"];
      return ret;
    },
});

module.exports = User = mongoose.model("User", UserSchema);