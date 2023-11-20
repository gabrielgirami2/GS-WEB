'use client'

import { signOut } from "next-auth/react"
import style from "../Sign-out-button.module.scss"

interface SignOutButtonProps {
    children: React.ReactNode
}

export const SignOutButton = ({ children }: SignOutButtonProps) => {
    return (
        <button className={style.button}onClick={() => signOut()}>
            {children}
            </button>
    );
};