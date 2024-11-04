"use client";

import "./header.css";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

const Header = () => {
  const { logout, user } = useUser();

  return (
    <header className="nav_container">
      <Link className="nav_container_title" href="/">
        CHEVOTECH
      </Link>
      <nav className="nav_links">
        <Link className="nav_container_options" href="/criadores">
          CRIADORES
        </Link>
        {!user ? (
          <Link className="nav_container_options" href="/login">
            LOGIN
          </Link>
        ) : (
          <button onClick={logout} className="logout-button">
            LOGOUT
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
