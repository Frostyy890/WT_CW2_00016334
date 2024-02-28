import Users from "../../../data/users.js";
import generateNewId from "../../utils/idGenerator.js";
import { User } from "../../models/index.js";


export const SignUp = async (req, res, next) => {
    try {
        const {username, email, password} = req.body
        const isExistingUser = Users.find(existingUser => existingUser.email === email);
        if(isExistingUser) {
            res.status(409).json({message: "User already exists"});
        } else {
            const id = generateNewId();
            const newUser = new User(id, username, email, password);
            Users.push(newUser);
            console.log(newUser);
            res.status(201).json({message: "User registration complete", newUser})
            console.log("All users:", Users)
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({message: "Internal Server Error"})
    }
}