import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "properties.json");

export function readProperties() {
    const data = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(data).properties;
}

export function writeProperties(properties) {
    fs.writeFileSync(
        dbPath,
        JSON.stringify({ properties }, null, 2)
    );
}

export function generateId() {
    return Date.now().toString();
}
