import { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && fname && lname ? (
        <div>
          Full Name: {fname} {lname}
        </div>
      ) : null}
    </div>
  );
}

export default App;
