const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [false, "Please add username!"],
    },
    email: {
        type: String,
        required: [false, "Please add email!"],
    },
    password: {
        type: String,
        required: [false, "Please add a password!"],
        select: false,
    },
    first_name: {
        type: String,
        required: [false, "Please add first name!"],
    },

    last_name: {
        type: String,
        required: [false, "Please add last name!"],
    },


    image: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

    // role:{
    //     type: String,
    //     enum: ['admin', 'customer'],
    //     default: 'customer'
    //   },

})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


userSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({
        id: this._id,
        // Names:this.first_name +" " + this.last_name,
        // Email:this.email,
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('User', userSchema);