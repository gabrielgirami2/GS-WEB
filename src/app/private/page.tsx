'use client'

import { useSession } from 'next-auth/react'
import style from 'C:/users/Dell/Documents/GS-WEB/src/style/private-page.module.scss'
import Form from 'C:/Users/Dell/Documents/GS-WEB/src/style/components/Form'

export default function PrivatePage() {
    const { data: session } = useSession()

    return (
        <div className={style.div}>
             <Form/>
        </div>    
        
        
    )
}