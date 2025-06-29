const InputField = ({ label, value, onChange, placeholder = "", required = false, type = "text" , className}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full ${className ? className : 'px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent'} outline-none border border-gray-300 rounded-lg  `}

    />
  </div>
);

export default InputField;