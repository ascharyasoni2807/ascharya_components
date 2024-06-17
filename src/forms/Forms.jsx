import React, { useState } from "react";

export const Input = ({
  label,
  name,
  type,
  value,
  checked,
  onChange,
  error,
}) => {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name:"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        label="Email:"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <button type="submit">Submit</button>
      <div>
        {formData.name} {formData.email}
      </div>
    </form>
  );
}

export default UserForm;
