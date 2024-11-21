function ProductInput({
  onInputChange,
  type = 'text',
  name,
  placeholder,
  label,
  required = false,
}) {
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        onChange={onInputChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

export default ProductInput;
