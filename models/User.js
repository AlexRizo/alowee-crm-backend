import { Schema, model } from "mongoose";

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE' // USER_ROLE ||  || ADMIN_ROLE
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: "Team",
        required: true
    }
});

export default model('User', UserSchema);