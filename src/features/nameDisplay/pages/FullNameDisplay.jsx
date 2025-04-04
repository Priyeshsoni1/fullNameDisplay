import React, { useState } from "react";

export const FullNameDisplay = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setFormData(data);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name :</label>
        <input name="firstName" required type="text" />
        <br />
        <label htmlFor="lastName">Last Name :</label>
        <input name="lastName" type="text" required />
        <br />
        <button type="submit">Submit</button>
      </form>

      {formData.firstName &&
        formData.lastName &&
        `Full Name: ${formData.firstName} ${formData.lastName}`}
    </div>
  );
};
