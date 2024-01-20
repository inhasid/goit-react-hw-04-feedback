import { useState } from "react";

import SectionTitle from "./SectionTitle/SectionTitle";
import NotificationMessage from "./NotificationMessage/NotificationMessage";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

import styles from "./feedback.module.css";

const feedbackOptions = ["Good", "Neutral", "Bad"];

const Feedback = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const countTotalFeedback = () =>
    {
        const { good, neutral, bad } = feedback;
        const total = good + neutral + bad;
        return total;
    }

    const countPositiveFeedbackPercentage = (keyName) => {
        const total = countTotalFeedback();
        if (!total) {
            return 0;
        }
        const value = feedback[keyName];
        return Number(((value / total) * 100).toFixed(2));
    }

    const leaveFeedback = (keyName) => {
        const lowerCaseKey = keyName.toLowerCase();
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [lowerCaseKey]: prevFeedback[lowerCaseKey] + 1 
        }))
    }

    const { good, neutral, bad } = feedback;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage("good");

    const isFeedbackGiven = total > 0;


    return (
            <div className={styles.wrapper}>
                <SectionTitle title="Please leave feedback">
                    <FeedbackOptions options={feedbackOptions} onLeaveFeedback={leaveFeedback} />
                </SectionTitle>
                <SectionTitle title="Statistics">
                    {isFeedbackGiven ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />) :
                        (<NotificationMessage message="There is no feedback" />)}
                    
                </SectionTitle>               
            </div>
            )
}

export default Feedback;