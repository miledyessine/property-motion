import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";
import { readUsers } from "@/lib/usersDb";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return NextResponse.json({ user: null });

    try {
        const { id } = verifyToken(token);

        const db = readUsers();
        const user = db.users.find((u) => u.id === id);

        console.log("Authenticated user:", user);
        return NextResponse.json({ user: user || null });
    } catch (err) {
        console.log("Token verification failed:", err);
        return NextResponse.json({ user: null });
    }
}
