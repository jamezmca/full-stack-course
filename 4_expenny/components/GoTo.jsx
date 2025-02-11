'use client'

import { useAuth } from "@/context/AuthContext"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function GoTo() {
    const { currentUser, logout } = useAuth()

    const isAuthenticated = !!currentUser

    const path = usePathname()

    return (
        <div className="goto">
            {path == '/' && (
                <>
                    <Link href={'/dashboard?register=true'}>
                        <p>Sign Up</p>
                    </Link>
                    <Link href={'/dashboard'}>
                        <button>Login &rarr;</button>
                    </Link>
                </>
            )}
            {(isAuthenticated && path == '/dashboard') && (
                <button onClick={logout}>Logout</button>
            )}
        </div>
    )
}