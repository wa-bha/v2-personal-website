import Link from "next/link";

const navItems = {
  "/": {
    name: "home"
  }
  //   "/blog": {
  //     name: "blog"
  //   }
};
const Navbar = () => {
  return (
    <nav
      id="nav-bar"
      className="z-10 bg-gradient-to-b from-floral-white h-14 fixed top-0 bottom-auto left-0 right-0 shadow-md"
    >
      <div className="max-w-[90%] m-auto h-full px-5 flex items-center">
        <div className="flex flex-row space-x-4 pr-10">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path}>
                <span className="font-medium slide-in-underline after:bg-tomato flex align-middle">
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
