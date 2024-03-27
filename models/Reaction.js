const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        userName: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)

reactionSchema.virtual('timeStamp').get(function () {
    return this.createdAt.toLocalString();
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;