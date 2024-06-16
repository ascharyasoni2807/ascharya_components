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
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
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
    if (!formData.gender) newErrors.gender = "Gender is required";

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
        subscribe: false,
        gender: "",
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

      <div>
        <label>Gender:</label>
        <Input
          label="Male"
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
          error={errors.gender}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
