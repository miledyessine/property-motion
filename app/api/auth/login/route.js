import { NextResponse } from "next/server";
import { readUsers } from "@/lib/usersDb";
import { verifyPassword } from "@/lib/hash";
import { generateToken } from "@/lib/jwt";

export async function POST(req) {
    const { email, password } = await req.json();

    const db = readUsers();
    const user = db.users.find((u) => u.email === email);

    if (!user) {
        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 400 }
        );
    }

    if (!verifyPassword(password, user.password)) {
        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 400 }
        );
    }

    const token = generateToken(user.id);

    const res = NextResponse.json({ success: true });

    res.cookies.set("token", token, {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    return res;
}
