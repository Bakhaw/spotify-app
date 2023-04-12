const Avatar: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  ...props
}) => {
  return <img className='Avatar' {...props} />;
};
export default Avatar;
