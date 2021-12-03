const mongoose = require('mongoose');

const FridgeSchema = new mongoose.Schema([
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    shelves: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
    }
])