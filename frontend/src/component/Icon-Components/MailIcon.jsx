import PropTypes from 'prop-types';

const MailIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 512 512"
  >
    <path d="M502.3 190.8l-192-128c-9.7-6.5-23.1-6.5-32.8 0l-192 128c-10.7 7.1-14.1 21.5-7.1 32.3l12.5 18.7c7.1 10.7 21.5 14.1 32.3 7.1l180-120c9.7-6.5 23.1-6.5 32.8 0l180 120c10.7 7.1 25.2 3.6 32.3-7.1l12.5-18.7c7.1-10.8 3.6-25.2-7.1-32.3zM0 224v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0zm464 288H48V288l208 138.7c9.7 6.5 23.1 6.5 32.8 0L464 288v224z" />
  </svg>
);

// PropTypes validation
MailIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default MailIcon;
