import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        index: {
            unique: true,
        }
    },
    role: String,
    password: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

const UserModel = mongoose.model("UserModel", UserSchema);

export { UserModel };