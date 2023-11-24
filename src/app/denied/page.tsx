import Link from "next/link"
import style from "C:/Users/Dell/Documents/GS-WEB/src/style/Deniedpage.module.scss";

export default function DeniedPage () {
    return (
        <div className={style.div}>
            <h1 className={style.h1}>Acesso Restrito</h1>
            <p className={style.p}>Você não está logado para prosseguir.</p>
            <Link href = "/" className={style.link}>Voltar</Link>
        </div>
    )
}