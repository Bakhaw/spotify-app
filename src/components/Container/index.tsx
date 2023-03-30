interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='Container'>{children}</div>;
};

export default Container;
