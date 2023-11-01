import styles from "./styles.module.css"

export default 

// eslint-disable-next-line react/prop-types
function SocialButton({text, link}) {
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={link} className={styles.SocialButton} target="_blank">{text}</a>
    )
}