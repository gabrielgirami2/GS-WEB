'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import style from '@/style/form-login.module.scss'

const LoginForm = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await signIn('credentials', {
                redirect: false,
                email,
                password,
            })

            console.log('[LOGIN_RESPONSE]: ', response)

            if (!response?.error) {
                router.refresh()
                router.push('/')
            } else {
                setError('Email ou senha inválidos')
            }
        } catch (error) {
            console.log('[LOGIN_ERROR]: ', error)
        }
    }

    return (
        <div className={style.div}>
            <form className={style.form} onSubmit={handleLogin}>
                <h1 className={style.h1}>Login</h1>
                <p className={style.p}>Faça login para continuar.</p>
                <div className={style.div2}>
                <div className={style.div3}>
                    <label htmlFor="email">E-mail</label>
                    <input 
                    type="email" 
                    name="email"
                    onChange={(e)=> setEmail(e.target.value)}  
                    className={style.input}
                    />
                </div>
                <div className={style.div4}>
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password" 
                    name="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    className={style.input2}
                    />
                </div>  
                {error && <span className={style.span}>{error}</span>}
                <button
                type='submit'
                className={style.button}
                >
                    Entrar
                </button>
                </div>
            </form>
        </div>
    )
}

export { LoginForm }