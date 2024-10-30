const Input = ({ id, className, placeholder, label, labelColor }) => {
  return (
    <>
      <label
        className={`${labelColor} font-bold text-slate-700 text-base`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`${className} border border-slate-700 rounded py-1 px-2 focus:outline-none`}
        id={id}
        placeholder={placeholder}
        type='text'
      />
    </>
  );
};

export default Input;
