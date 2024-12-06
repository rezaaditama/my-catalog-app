const Button = ({ className, children, type }) => {
  return (
    <button
      className={`${className} bg-blue-600 text-white font-bold rounded`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
