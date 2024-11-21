function ProductInput({
  onInputChange,
  type = 'text',
  name,
  placeholder,
  label,
  value,
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
        value={value}
      />
    </label>
  );
}

export default ProductInput;
