'use client'

import { useSession } from 'next-auth/react'
import style from '../public/public-page.module.scss'
export default function PublicPage () {
    const { data: session } = useSession()

    return (
        <div className={style.div}>
            <h1>Sedentech</h1>
            {session && <pre className={style.pre}>{JSON.stringify(session, null, 2)}</pre>}
        </div>
    )
}