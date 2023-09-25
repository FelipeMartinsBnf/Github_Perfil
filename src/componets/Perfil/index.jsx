import styles from "./Perfil.module.css"

function Perfil({nomeGit, nomeUsuario}) {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name} >{nomeGit}</h1>
            <h4 className={styles.namesec} >{nomeUsuario}</h4>
        </header>
    )
}

export default Perfil