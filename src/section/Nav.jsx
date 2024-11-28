import { NavList } from "../constants";

const Nav = () => {
  return (
    <header className="w-full py-12 flex justify-center border-b">
      <div className="flex justify-between items-center w-[1280px]">
        <h3 className="font-lobster text-3xl cursor-default">
          Foodieland<span className="text-secondary">.</span>
        </h3>
        <div className="flex gap-14">
          {NavList.map((item) => (
            <a
              href={item.url}
              key={item.id}
              className=" font-medium hover:text-secondary duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-between w-32">
          <a href="/">
            <img
              src="../assets/facebook.png"
              alt="icon"
              className="w-7 h-7 bg-white hover:invert hover:rounded-md  duration-200 scale-105"
            />
          </a>
          <a href="/">
            <img
              src="../assets/twitter.png"
              alt="icon"
              className="w-7 h-7 bg-white hover:invert hover:rounded-md  duration-200 scale-105"
            />
          </a>
          <a href="/">
            <img
              src="../assets/instagram.png"
              alt="icon"
              className="w-7 h-7 bg-white hover:invert hover:rounded-md  duration-200 scale-105"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
