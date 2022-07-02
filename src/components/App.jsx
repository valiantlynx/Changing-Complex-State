import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });

  const [click, setClick] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;

    console.log(name + ": " + value);
    setfullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  function handleClick(event) {
    console.log(event.target.name);
    setClick(fullName);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {click.fName} {click.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
