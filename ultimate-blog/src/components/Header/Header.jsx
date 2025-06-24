import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logout, Logo } from "../index.js";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const paths = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !isAuthenticated,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !isAuthenticated,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: isAuthenticated,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: isAuthenticated,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {paths.map((path) =>
              path.active ? (
                <li key={path.name}>
                  <button
                    type="button"
                    onClick={() => navigate(path.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {path.name}
                  </button>
                </li>
              ) : null
            )}
            {isAuthenticated && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
