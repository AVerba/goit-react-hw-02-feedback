import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, feedbackHandler }) => {
  return (
    <ul className={styles.list}>
      {options.map((option, index) => (
        <li className={styles.item} key={index}>
          <button name={option} type="button" onClick={feedbackHandler}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  feedbackHandler: PropTypes.func.isRequired,
};
