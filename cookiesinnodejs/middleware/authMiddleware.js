import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please Login"
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            "mysecretkey"
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};