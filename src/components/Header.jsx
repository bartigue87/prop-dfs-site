import "./component-styles/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="left--header">
          <h3>Prop Hive</h3>
          <p>Board</p>
          <p>My Entries</p>
        </div>
        <div className="right--header">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  );
}
