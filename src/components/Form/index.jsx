const Form = ({ children, className, action }) => {
  return (
    <form action={action} className={className}>
      {children}
    </form>
  );
};

export default Form;
