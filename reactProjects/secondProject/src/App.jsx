import { useState } from "react";
import { Navbar } from "./Navbar";

export const App = () => {
  const [name, setName] = useState("Arvind");
  const [email, setEmail] = useState("arvind@gmail.com");
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsFormSubmit(true);
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleNameChange} name={"name"} />

        <input type="text" onChange={handleEmailChange} />

        {isFormSubmit && (
          <>
            <p>Name: {name}</p>
            <p>Email: {email}</p>

            <button type="button" onClick={() => setIsFormSubmit(false)}>
              Hide{" "}
            </button>
          </>
        )}

        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>

      <Navbar/>
      <Navbar/>
      <Navbar/>
      <Navbar/>
      <Navbar/>
    </>
  );
};

// function App(){

// }

// export default App;
