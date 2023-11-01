import styles from "./styles.module.css"

export default

// eslint-disable-next-line react/prop-types
function ProfileSection({children}) {
    return (
        <p className={styles.wrapper}>
            {children}
        </p>
    )
}