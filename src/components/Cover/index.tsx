interface CoverProps {
  url: string;
  width: string;
}

const Cover: React.FC<CoverProps> = ({ url, width }) => {
  return (
    <img
      alt='Cover'
      className={`h-full w-[${width}] max-w-none rounded-[30px] shadow-md object-cover`}
      src={url}
    />
  );
};

export default Cover;
