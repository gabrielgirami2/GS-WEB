'use client'

import { useSession } from 'next-auth/react'
import style from '@/style/private-page.module.scss'
import { Form } from '@/style/components/Form'
import Link from 'next/link'


export default function PrivatePage() {
    const { data: resposta } = useSession()

    return (
        <div className={style.div}>
             <h1><Link href="/">Sedentech</Link></h1>
             <Form/>
             {resposta && <pre className={style.pre}>{JSON.stringify(resposta, null, 2)}</pre>}
        </div>    
        
        
    )
}