"use client";

import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function AuthProvider({ children }) {
    const fetchUser = useAuth((s) => s.fetchUser);

    useEffect(() => {
        fetchUser(); 
    }, []);

    return <>{children}</>;
}
