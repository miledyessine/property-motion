import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
    throw new Error("Missing JWT_SECRET in environment variables");
}

export function generateToken(id) {
    return jwt.sign({ id }, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token) {
    return jwt.verify(token, SECRET);
}
