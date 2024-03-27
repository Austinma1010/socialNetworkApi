const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            min_length: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

thoughtSchema.virtual('timeStamp').get(function () {
    return this.createdAt.toLocalString();
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;