import jwt from "jsonwebtoken";

export const login = async (req, res) => {

    const { email, password } = req.body;

    if (
        email === "palak@gmail.com" &&
        password === "123456"
    ) {

        const token = jwt.sign(
            { email },
            "mysecretkey",
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.json({
            message: "Login Success"
        });
    }

    res.status(401).json({
        message: "Invalid Credentials"
    });
};