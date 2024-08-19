import PropTypes from 'prop-types';
const CustomIcon2 = ({ size = 24, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 512 512"
  >
      <path d="M256 32C119.03 32 8 119.03 8 256c0 46.94 15.16 90.22 40.57 125.63C21.09 426.34 0 480 0 480s41.66-21.09 97.37-48.57C131.78 469.84 171.61 480 256 480c136.97 0 248-87.03 248-224S392.97 32 256 32zm0 384c-53.02 0-101.09-20.17-137.43-53.57C147.98 353.67 192 320 256 320c53.02 0 101.09 20.17 137.43 53.57C357.02 395.83 309.95 416 256 416zm0-64c-70.69 0-128-57.31-128-128s57.31-128 128-128 128 57.31 128 128-57.31 128-128 128z" />
  </svg>


);
  // PropTypes validation
  CustomIcon2.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
  };

export default CustomIcon2;
