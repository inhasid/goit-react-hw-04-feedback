import styles from "./section-title.module.css";

const SectionTitle = ({title, children}) => {
    return (
            <div className={styles.block}>
            <h2 className={styles.blockTitle}>{title}</h2>
            {children}
            </div>
    )
}

export default SectionTitle;