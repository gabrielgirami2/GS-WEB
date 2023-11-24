import styles from '../AboutToDo.module.scss'

const AboutToDo = () => {
    return (
        <div className={styles.div}>
            <h1>Como preencher o formulário?</h1>
            <p>
            Primeiro, você precisa estar logado em nosso site,
            após esta etapa, aparecerá a opção de realizar o formulário,
            logo após terminar de preencher será envado para você o resultado via e-mail.
            </p>
        </div>
    )
}

export default AboutToDo;