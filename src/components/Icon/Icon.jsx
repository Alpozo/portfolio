
import icons from './icons';

const Icon = ({ name, size = 20, ...props }) => {

  const iconSrc = icons[ name ];

  if (!iconSrc) return null;

  return (
    <img
      src={iconSrc}
      alt={name}
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Icon;