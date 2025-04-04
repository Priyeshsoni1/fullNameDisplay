import React, { useState } from "react";

export const FullNameDisplay = () => {
  // const [formData, setFormData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (firstName && lastName) setFullName(`${firstName} ${lastName}`);
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());
  //   setFormData(data);
  // };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name :</label>
        <input
          name="firstName"
          required
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name :</label>
        <input
          name="lastName"
          type="text"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
      {/* {formData.firstName &&
        formData.lastName &&
        `Full Name: ${formData.firstName} ${formData.lastName}`} */}
    </div>
  );
};
