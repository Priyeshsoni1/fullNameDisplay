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
        <div>
          <label htmlFor="firstName">First Name :</label>
          <input name="firstName" required type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name :</label>
          <input name="lastName" type="text" required pattern="^[A-Za-z\s]+$" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* ✅ Wrap the full name inside a div so Cypress can find it */}
      <div id="fullNameDisplay">
        {formData.firstName &&
          formData.lastName &&
          `Full Name: ${formData.firstName} ${formData.lastName}`}
      </div>
    </div>
  );
};
