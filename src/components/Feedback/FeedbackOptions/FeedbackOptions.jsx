const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonElements = options.map(name => <button onClick={(() => onLeaveFeedback(name))} key={name}>{name}</button>);

    return buttonElements;
}

export default FeedbackOptions;