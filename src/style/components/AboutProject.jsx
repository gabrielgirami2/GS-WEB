import styles from '../AboutProject.module.scss'

const AboutProject = () => {
    return (
        <div className={styles.div}>
            <h1>Bem-vindo ao Sedentech</h1>
            <p>
            O Sedentech é um projeto que calcula a porcentagem de risco de um ataque cardíaco
        com base nas informações que você fornece. Preencha o formulário acima para obter
        uma estimativa do seu risco.
            </p>
        </div>
    )
}

export default AboutProject;