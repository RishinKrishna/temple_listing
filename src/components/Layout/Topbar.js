import Link from 'next/link';

const Topbar = () => {
  return (
    <div className="admin-topbar">
      <div className="logo">
        <Link href="/">
          <span>Admin Dashboard</span>
        </Link>
      </div>
      <ul className="navbar">
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
