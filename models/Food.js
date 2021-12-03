const mongoose = require(`mongoose`);

const FoodSchema = new mongoose.Schema({
    foodName: {
        type: `String`,
        required: true,
        minlength: 2,
        maxLength: 12,
    },
    expirationDate: {
        type: Date,
    },
    description: {
        type: `String`,
        maxLength: 150,
    },
},
{timestamps: true}
);

module.exports = Food = mongoose.model("Food", FoodSchema);