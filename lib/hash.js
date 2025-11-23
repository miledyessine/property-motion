import bcrypt from "bcryptjs";

export function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

export function verifyPassword(password, hashed) {
    return bcrypt.compareSync(password, hashed);
}
