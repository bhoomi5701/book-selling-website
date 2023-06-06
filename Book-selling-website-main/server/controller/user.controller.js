import { UserModel } from "../model/user.model.js";

// post user data for storing
const registerUser = async (req, res, next) => {
    const user = req.body.data;
    const userModel = new UserModel(
        user
    );
    try {
        const data = await userModel.save();
        res.status(201).json({ data, message: "data added successfully." });
    }
    catch (err) {
        const error = new Error("Post Error problem");
        res.json({error});
        next(err);
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body.data;
        const user = await UserModel.find({email}).exec();
        if(user.length === 0) {
            res.json({error: "User not registred.", user});
        }
        else if(password != user[0].password) {
            res.json({error: "Password is wrong."});
        }
        res.status(201).json({user, message: "User Login"});
    } catch(err) {
        // res.json({message: "user is not found." ,err});
    }
};

const getUser = async (req, res) => {
    try {
        const users = await UserModel.find({}).exec();
        res.status(200).json(users);
    } catch(err) {
        res.json({err});
        console.log(err);
    }
};


export { registerUser, loginUser, getUser };