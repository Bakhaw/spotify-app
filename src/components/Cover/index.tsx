import classNames from 'classnames';

interface CoverProps {
  rounded?: boolean;
  src: string;
}

const Cover: React.FC<CoverProps> = ({ rounded, src }) => {
  return (
    <img
      alt='Cover'
      className={classNames('Cover', rounded && 'Cover--rounded')}
      src={src}
    />
  );
};

export default Cover;
