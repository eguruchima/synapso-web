export function Header({ user }) {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a>
      </nav>
      <div>{user ? <p>Welcome, {user.name} 👋</p> : <p>You are not logged in.</p>}</div>
    </header>
  );
}
