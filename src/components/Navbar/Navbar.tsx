import Link from "next/link";

const navItems = {
  "/": {
    name: "bhavit"
  }
  //   "/blog": {
  //     name: "blog"
  //   }
};
const Navbar = () => {
  return (
    <nav
      id="nav-bar"
      className="fixed bottom-auto left-0 right-0 top-0 z-10 h-14 bg-gradient-to-b from-floral-white shadow-md"
    >
      <div className="m-auto flex h-full max-w-[90%] items-center px-5">
        <div className="flex flex-row space-x-4 pr-10">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path}>
                <span className="slide-in-underline flex align-middle font-medium after:bg-tomato">
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
