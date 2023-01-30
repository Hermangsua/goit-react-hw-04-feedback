import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ params, onBtnFeedback }) => (
  <ul className={css.list}>
    {params.map((param, index) => (
      <li key={index} className={css.feedbackItem}>
        <button
          key={index}
          className={css.feedbackBtn}
          onClick={() => onBtnFeedback(param)}
        >
          {param}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  params: propTypes.arrayOf(propTypes.string).isRequired,
  onBtnFeedback: propTypes.func.isRequired,
};
