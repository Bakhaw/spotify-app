interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='Container'>
      <div className='Container__content'>{children}</div>
    </div>
  );
};

export default Container;
