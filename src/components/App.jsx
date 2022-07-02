import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [clickFirst, setClickFirst] = useState("");
  const [clickLast, setClickLast] = useState("");

  function handleChangeFirst(event) {
    console.log(event.target);
    setFname(event.target.value);
  }
  function handleChangeLast(event) {
    console.log(event.target);
    setLname(event.target.value);
  }

  function handleClick(event) {
    console.log(event.target.value);
    setClickFirst(fname);
    setClickLast(lname);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {clickFirst} {clickLast}
      </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChangeFirst}
          name="fName"
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={handleChangeLast}
          name="lName"
          placeholder="Last Name"
          value={lname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
