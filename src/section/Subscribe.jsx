const Subscribe = () => {
  return (
    <section className="w-full relative p-10">
      <div className="w-[1280px] h-[442px] mx-auto bg-primary rounded-[70px] relative flex items-center">
        <div className="w-[620px] overflow-hidden mx-auto flex flex-col items-center  relative">
          <h2 className="text-black text-5xl font-bold">
            Deliciousness to your inbox
          </h2>
          <p className="text-black/60 my-10 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            itaque ad ipsa totam vitae, corrupti, nobis corporis reprehenderit
          </p>
          <div className="w-[480px] h-[80px] rounded-3xl flex p-3 justify-between bg-white">
            <input
              type="email"
              placeholder="Your email address..."
              className="w-2/3 rounded-xl px-5"
            />
            <button className="font-semibold text-sm text-white bg-black px-10 py-2 rounded-xl hover:scale-105 hover:bg-secondary/100 duration-300">
              Subscribe
            </button>
          </div>
        </div>
        <img
          src="./assets/kisspng.png"
          alt="subs"
          className="absolute bottom-0 left-0 z-20 rounded-r-[70px]"
        />
        <img
          src="./assets/Photo.png"
          alt="subs"
          className="absolute bottom-0 right-0 z-20 rounded-r-[70px]"
        />
      </div>
    </section>
  );
};

export default Subscribe;
