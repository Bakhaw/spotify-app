import classNames from 'classnames';

interface CoverProps {
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large'; // default: "medium"
  square?: boolean; // removes border-radius
  src: string;
}

const Cover: React.FC<CoverProps> = ({
  rounded,
  size = 'medium',
  square,
  src,
}) => {
  return (
    <img
      alt='Cover'
      className={classNames(
        'Cover',
        `Cover--${size}`,
        rounded && 'Cover--rounded',
        square && 'Cover--square'
      )}
      src={src}
    />
  );
};

export default Cover;
