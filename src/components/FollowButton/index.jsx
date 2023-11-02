import styles from "./styles.module.css"

export default
// eslint-disable-next-line react/prop-types
function FollowButton({ followText, ...props }) {
    return (
      <button className={styles.FollowButton} 
        {...props}>
        {followText}
      </button>
    );
  }