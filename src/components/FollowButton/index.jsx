import styles from "./styles.module.css"

export default

function FollowButton(props) {
    return(
        <button className={styles.FollowButton}
        {...props}
        >Follow</button>
    )
}