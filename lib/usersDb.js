import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "users.json");

export function readUsers() {
    const data = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(data);
}

export function writeUsers(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
