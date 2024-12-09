import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("/api/auth/admin", {
      headers: {
        role: "admin",
      },
    }).then((res) => {
      if (res.status === 200) {
        setIsAdmin(true);
      }
    });
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  return (
    <nav
      style={{
        backgroundColor: "#556B2F",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Navbar
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: "0",
          padding: "0",
        }}
      >
        <li>
          <Link
            to="/home"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/pemesanan"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Pemesanan
          </Link>
        </li>
        {isAdmin ? (
          <li>
            <Link
              to="/admin"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Admin
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
