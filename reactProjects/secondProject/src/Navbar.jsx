import Button from "./Button";

export const Navbar = () => {

  return (
    <>
      <header>
        <div>logo</div>

        <nav>
          <ul>
            <li>home</li>
            <li>services</li>
            <li>About us </li>
            <li>contact us</li>
          </ul>
        </nav>

        {/* <button>Login</button> */}
        <Button text="login"/>
        <Button text="jdfhd"/>
        <Button text="eriourepiu"/>
        <Button text="rgrtgrtg"/>
        <Button text="gtertgetrg"/>
      </header>
    </>
  );
};
