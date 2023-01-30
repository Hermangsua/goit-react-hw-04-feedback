import propTypes from 'prop-types';

export const Notification = ({ message }) => <p className="">{message}</p>;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
