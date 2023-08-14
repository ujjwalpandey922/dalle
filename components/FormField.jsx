const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  onChange,
  value,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="text-md font-medium text-gray-700">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            className="bg-slate-600 p-2 text-red-50 rounded-lg hover:bg-slate-700 active:scale-105 transition-colors"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border border-gray-200 bg-gray-100 focus:border-blue-600 text-gray-950  outline-none p-4 my-4 rounded-lg w-full "
      />
      
    </div>
  );
};

export default FormField;
