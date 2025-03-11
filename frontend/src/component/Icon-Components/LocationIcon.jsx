import PropTypes from 'prop-types';

const LocationIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 512 512"
  >
    <path d="M256 0C114.6 0 0 114.6 0 256c0 66.8 25.6 128.9 67.4 175.2 1.9 2 3.9 3.9 6 5.8l92.2 92.2c8.9 8.9 23.3 8.9 32.2 0l40.6-40.6c8.9-8.9 8.9-23.3 0-32.2l-92.2-92.2c-1.9-2.1-3.8-4.1-5.8-6C128.9 281.6 66.8 256 0 256 0 114.6 114.6 0 256 0zm0 384c-70.7 0-128-57.3-128-128S185.3 128 256 128s128 57.3 128 128-57.3 128-128 128z" />
  </svg>
);

// PropTypes validation
LocationIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default LocationIcon;
