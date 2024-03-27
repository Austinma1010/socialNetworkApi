const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate: {
                validator: function(value) {
                  return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
                },
            },
        },
        thoughts: [thoughtSchema],
        friends: [userSchema]
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);

userSchema.virtual('friendCount')
.get(function () {
    return `${friends.length}`;
});

const User = model('user', userSchema);
module.exports = User;