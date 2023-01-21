interface CoverProps {
  radius: string;
  url: string;
  width: string;
}

const Cover: React.FC<CoverProps> = ({ radius, url, width }) => {
  return (
    <img
      alt='Cover'
      className={`h-full w-[${width}] max-w-none rounded-${radius} shadow-md object-cover`}
      src={url}
    />
  );
};

export default Cover;
