import { NextResponse } from "next/server";
import { readUsers, writeUsers } from "@/lib/usersDb";
import { hashPassword } from "@/lib/hash";

export async function POST(req) {
    const { businessName, officeAddress, postCode, email, password } =
        await req.json();

    const db = readUsers();
    const exists = db.users.find((u) => u.email === email);

    if (exists) {
        return NextResponse.json(
            { error: "User already exists" },
            { status: 400 }
        );
    }

    const newUser = {
        id: Date.now().toString(),
        businessName,
        officeAddress,
        postCode,
        email,
        password: hashPassword(password),
    };

    db.users.push(newUser);
    writeUsers(db);

    return NextResponse.json({ success: true });
}
