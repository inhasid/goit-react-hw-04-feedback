import styles from "./notification-message.module.css";

const NotificationMessage = ({ message }) => {
    return (
        <div className={styles.notification}>
            {message}
        </div>
    )
}

export default NotificationMessage;