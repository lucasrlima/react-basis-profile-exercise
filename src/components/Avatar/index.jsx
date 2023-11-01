import styles from"./styles.module.css"

export default

// eslint-disable-next-line react/prop-types
function Avatar({avatar, name}) {
    return (
        <img src={avatar} alt={name} className={styles.Avatar} />
    )
}