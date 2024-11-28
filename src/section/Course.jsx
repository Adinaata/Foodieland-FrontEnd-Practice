const Course = () => {
  return (
    <section className="w-full h-auto">
      <div className=" w-[1280px] mx-auto h-[597px] my-40 flex">
        <div className="w-1/2 my-32 py-10 pr-16">
          <h1 className="font-semibold text-5xl text-left">
            Everyone can be a <br />
            chef in their own kitchen
          </h1>
          <p className="text-black/60 mt-10 mb-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            maxime voluptas odio quam harum a ab aliquid excepturi hic cum.
            Officia dicta quod error odio amet excepturi ea dolorum ipsa?
          </p>
          <button className="font-semibold text-sm text-white bg-black px-10 py-4 rounded-xl hover:scale-105 hover:bg-secondary/100 duration-300">
            Learn More
          </button>
        </div>
        <div>
          <img
            src="./assets/Group880.png"
            alt="chef"
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Course;
