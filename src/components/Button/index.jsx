const Button = ({ className, children, type }) => {
  return (
    <button className={`${className} font-bold py-1 rounded`} type={type}>
      {children}
    </button>
  );
};

export default Button;
