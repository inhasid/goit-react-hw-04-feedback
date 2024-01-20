import styles from "./feedback-options.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonElements = options.map(name => <button onClick={(() => onLeaveFeedback(name))} key={name} className={styles.btn}>{name}</button>);

    return buttonElements;
}

export default FeedbackOptions;