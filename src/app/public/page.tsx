'use client'

import { useSession } from 'next-auth/react'
import style from 'C:/Users/Dell/Documents/GS-WEB/src/style/public-page.module.scss'
import { LoginForm } from '../auth/login/components/form-login'
import Link from 'next/link'

export default function PublicPage () {
    const { data: session } = useSession()

    return (
        <div className={style.div}>
            <h1><Link href="/">Sedentech</Link></h1>
            <LoginForm/>
            {session && <pre className={style.pre}>{JSON.stringify(session, null, 2)}</pre>}
        </div>
    )
}