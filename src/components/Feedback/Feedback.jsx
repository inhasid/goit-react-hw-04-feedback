import { useState, Component } from "react";

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

/*class Feedback extends Component {
    static feedbackOptions = ["Good", "Neutral", "Bad"]

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }

    countPositiveFeedbackPercentage(keyName) {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const value = this.state[keyName];
        return Number(((value / total) * 100).toFixed(2));
    }

    leaveFeedback = (keyName) => {
        const lowerCaseKey = keyName.toLowerCase();
        this.setState(prevState => {
            return {
                [lowerCaseKey]: prevState[lowerCaseKey] + 1
            }
        })
    }

    render() {
        const { good, neutral, bad } = this.state;

        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage("good");

        const isFeedbackGiven = total > 0;


        return (
            <div className={styles.wrapper}>
                <SectionTitle title="Please leave feedback">
                    <FeedbackOptions options={Feedback.feedbackOptions} onLeaveFeedback={this.leaveFeedback} />
                </SectionTitle>
                <SectionTitle title="Statistics">
                    {isFeedbackGiven ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />) :
                        (<NotificationMessage message="There is no feedback" />)}
                    
                </SectionTitle>               
            </div>
        )
     }
}*/

export default Feedback;