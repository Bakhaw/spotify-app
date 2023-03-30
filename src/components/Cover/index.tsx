import classNames from 'classnames';

interface CoverProps {
  rounded?: boolean; // rounded style is applied for "tracks"
  size?: 'small' | 'medium' | 'large'; // default: "medium"
  src: string;
}

const Cover: React.FC<CoverProps> = ({ rounded, size = 'medium', src }) => {
  return (
    <img
      alt='Cover'
      className={classNames(
        'Cover',
        `Cover--${size}`,
        rounded && 'Cover--rounded'
      )}
      src={src}
    />
  );
};

export default Cover;
