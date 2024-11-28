const Footer = () => {
  return (
    <footer className="w-[1280px] mx-auto">
      <div className="border-b mt-32 py-14 flex  justify-between items-center">
        <div>
          <p className="font-lobster text-2xl">
            Foodieland<span className="text-secondary">.</span>
          </p>
          <p className="text-black/60 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex gap-16">
          <a href="/" className="font-medium hover:text-secondary duration-300">
            Recipes
          </a>
          <a href="/" className="font-medium hover:text-secondary duration-300">
            Blog
          </a>
          <a href="/" className="font-medium hover:text-secondary duration-300">
            Contact
          </a>
          <a href="/" className="font-medium hover:text-secondary duration-300">
            About us
          </a>
        </div>
      </div>
      <div className="py-14 flex items-center">
        <div className="w-2/3 flex justify-end mr-12">
          <p className="text-black/60">
            &copy;2020Flowbase. Powered by{" "}
            <span className="text-secondary cursor-pointer hover:text-black/60">
              Webflow
            </span>
          </p>
        </div>
        <div className="w-1/3 ">
          <div className="flex justify-end gap-10">
            <a href="/">
              <img
                src="../assets/facebook.png"
                alt="icon"
                className="w-6 h-6 bg-white hover:invert hover:rounded-md  duration-200 scale-105"
              />
            </a>
            <a href="/">
              <img
                src="../assets/twitter.png"
                alt="icon"
                className="w-6 h-6 bg-white hover:invert hover:rounded-md  duration-200 scale-105"
              />
            </a>
            <a href="/">
              <img
                src="../assets/instagram.png"
                alt="icon"
                className="w-6 h-6 bg-white hover:invert hover:rounded-md  duration-200 scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
