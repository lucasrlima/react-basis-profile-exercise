import styles from "./styles.module.css"

export default 

// eslint-disable-next-line react/prop-types
function ProfileTitle({children}) {
    return (
        <h2 className={styles.wrapper}>{children}</h2>
        
    )
}