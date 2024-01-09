const User = require("../models/user.model");
const bcrypt = require("bcryptjs")
module.exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        return res.status(200).json({
            message: "User register successfully",
            user: newUser
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
        console.log(err.message)
    }
}
module.exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;
        //check user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }
    } catch (err) {
        console.log(err)
    }

}